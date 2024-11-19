function Convert(code: string, input: string): string {
    const code_list = code.split('\n');
    const input_list = input.split('\n');
    const var_list: string[] = [];
    const output_list: string[] = [];
    const abc_list: string[] = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
    const initial_types = {
        space: /^[ 　]*$/,
        if: /^条件１　(.+)$/,  // If文
        elseIf: /^条件[２３４５６７８９]　(.+)$/,  // Else if文
        else: /^例外$/,  // Else文
        for: /^ループ　(.+)　＝＞　(.+)$/,  // For文
        print: /^表示（(.*)）$/, //出力関数   
        assign: /^([^＝]+)　＝　([^＝]+)$/,  // 代入式
        funcs: /^(?:[^。]+(?:。[^。]+)+)$/,
    }
    const arg_types = {
        funcs: /^(?:[^。]+(?:。[^。]+)+)$/,
        func: /^(.+)（(.*)）$/,  // 関数
        list: /^「(.+?(?:、.+)*)」$/,  // リスト
        item: /^(.+?)((?:「(.*?)」)+)$/,  // リストの値
        num: /^[０１２３４５６７８９ー]+$/,  // 数字
        fin: /(　＋　|　ー　|　＊　|　｜　|　％　)/
    }
    const func_types = {
        int: /^数字（(.*)）$/,
        str: /^文字（(.*)）$/,
        split: /^分割（(.*)）$/,
        input: /^取得（(.*)）$/,
        push: /^追加（(.*)）$/,
        delete: /^削除（(.*)）$/,
        len: /^個数（(.*)）$/,
        range: /^数列（(.*)）$/,
    }
    const no_func = /^([^（]*)）(.*)（([^)]*)$/;


    // 全角のスペース数とコードの取得
    function getSpaceAndLine(lines: string): [number, string] {
        const match = lines.match(/^　+/);
        const space = match ? match[0].length : 0;
        const line = lines.replace(/^　+/, '');
        return [space, line];
    }
    //数字の変換
    function convertNum(arg: string): string {
        const full_nums = '０１２３４５６７８９ー';
        const half_nums = '0123456789-';
        return arg.replace(/[０１２３４５６７８９ー]/g, (match) => {
            return half_nums[full_nums.indexOf(match)];
        });
    }
    //リストの変換
    function convertList(arg: string): string {
        let return_list: string[] = [];
        let nest_count = 0;
        let list_value = '';
        for (let char of arg.slice(1, -1)) {
            if (char === '「') { nest_count += 1; }
            else if (char === '」') { nest_count -= 1; }
    
            if (char === '、' && nest_count === 0) {
                return_list.push(convertArg(list_value));
                list_value = ''; }
            else { list_value += char; }
        }
        return_list.push(convertArg(list_value));
        return `[${return_list.join(', ')}]`;
    }
    //リストの値の変換
    function convertItem(arg: string): string {
        const start_index = arg.indexOf('「');
        const list_name = arg.slice(0, start_index);
        let list_indexs: string[] = [];
        let nest_count = 0;
        let index = '';
        for (const char of arg.slice(start_index)) {
            if (char === '「') { nest_count += 1 ; if ( nest_count > 1 ) { index += char; }}
            else if ( char === '」' ) {
                nest_count -= 1;
                if ( nest_count > 0 ) { index += char; }
                if ( nest_count === 0 ) { list_indexs.push(`[${convertArg(index)}]`); index = ''; }}
            else { index += char; }
        }
        return `vars["${list_name}"]${list_indexs.join("")}`;
    }
    // 式の変換
    function convertFin(arg: string): string {
        arg = arg.replace(/　＋　/g, '+')
            .replace(/　ー　/g, '-')
            .replace(/　＊　/g, '*')
            .replace(/　｜　/g, '/')
            .replace(/　％　/g, '%');

        let answer = '';
        let term = '';
        for (const char of arg) {
            if (["+", "-", "*", "/", "%"].includes(char)) {
                answer += term ? convertArg(term) + char : char;
                term = ''; }
            else { term += char; }
        }
        answer += convertArg(term)
        return answer;
    }
    function convertFunc(item: string): string {
        let items;
        if (items = item.match(func_types.str)) {
            return `String(${convertArg(items[1])})`;
        } else if (items = item.match(func_types.int)) {
            return `Number(${convertArg(items[1])})`;
        } else if (items = item.match(func_types.input)) {
            input_flg = true;
            return `input_list[input_count]`
        } else if (items = item.match(func_types.split)) {
            return `split(${convertArg(items[1])})`;
        } else if (items = item.match(func_types.push)) {
            return `push(${convertArg(items[1])})`;
        } else if (items = item.match(func_types.delete)) {
            return `splice(${convertArg(items[1])}, 1)`;
        } else if (items = item.match(func_types.len)) {
            return `${convertArg(items[1])}.length`
        } else if (items = item.match(func_types.range)) {
            return `range(${convertArg(items[1])})`
        }

        return '';
    }
    // 条件分岐の変換
    function convertIf(arg: string): string {
        arg = arg.replace(/　＆　/g, '&&')
        .replace(/　＄　/g, '||');

        let answer = '';
        let term = '';
        for (const char of arg) {
            if (["&","|"].includes(char)) {
                answer += term ? convertIf2(term) + char : char;
                term = ''; }
            else { term += char; }
        }
        answer += convertIf2(term)
        return answer;
    };
    function convertIf2(arg: string): string {
        arg = arg.replace(/　＝＝　/g, '==')
            .replace(/　！＝　/g, '!=')
            .replace(/　＜　/g, '<')
            .replace(/　＞　/g, '>')
            .replace(/　＜＝　/g, '<=')
            .replace(/　＞＝　/g, '>=');

        let answer = '';
        let term = '';
        for (const char of arg) {
            if (["=","!","<",">"].includes(char)) {
                answer += term ? convertArg(term) + char : char;
                term = ''; }
            else { term += char; }
        }
        answer += convertArg(term)
        return answer;
    }
    function convertFuncs(arg: string): string {
        let return_list: string[] = [];
        let nest_count = 0;
        let list_value = '';
        for (let char of arg) {
            if (char === '（') { nest_count += 1; }
            else if (char === '）') { nest_count -= 1; }
    
            if (char === '。' && nest_count === 0) {
                return_list.push(convertArg(list_value));
                list_value = ''; }
            else { list_value += char; }
        }
        return_list.push(convertArg(list_value));
        return `${return_list.join('.')}`;
    }
    // 一致するかどうかの判定
    function convertArg (item: string): any {
        let items;
        if (!item) {
            return '';
        }
        
        if (var_list.includes(item)) {
            return `vars["${item.trim()}"]`;
        } else if (arg_types.num.test(item)) {// 数字
            return convertNum(item.trim());
        } else if (arg_types.list.test(item)) {
            return convertList(item);
        } else if (items = item.match(arg_types.item)) {
            return convertItem(item);
        } else if (items = item.match(arg_types.fin)) {
            return convertFin(item);
        } else if (items = item.match(arg_types.func) && !no_func.test(item.slice(item.indexOf('（')+1,-1))) {
            return convertFunc(item);
        } else if (items = item.match(arg_types.funcs)) {
            return convertFuncs(item);
        } 
        
        return `"${item}"`
    }
    
    
    let past_index: number = 0;
    let exec_code = 'const vars = {};let input_count = 0;function range(n) {return Array.from({ length: n }, (_, i) => i);}';
    let for_count  = 0;
    let input_flg = false;
    for (let i = 0; i < code_list.length; i++) {
        const [now_indent, line] = getSpaceAndLine(code_list[i]);
        let match;
        input_flg = false;

        if (match = line.match(initial_types.space)) {
            continue;
        } 

        if (now_indent < past_index) {
            exec_code += '}'.repeat(past_index - now_indent);
        }
        past_index = now_indent

        if (match = line.match(initial_types.assign)) {
            const value = match[2] !== "「」" ? convertArg(match[2]) : "[]";
            exec_code += arg_types.item.test(match[1]) 
                ? `${convertItem(match[1])}=${value};`
                : `vars["${match[1]}"]=${value};`;
            var_list.push(match[1]);
        } else if (match = line.match(initial_types.print)) {
            exec_code += `output_list.push(JSON.stringify(${convertArg(match[1])})[0] === '"' ? String(${convertArg(match[1])}) : JSON.stringify(${convertArg(match[1])}));`
        } else if (match = line.match(initial_types.if)) {
            exec_code += `if (${convertIf(match[1])}){`;
        } else if (match = line.match(initial_types.elseIf)) {
            exec_code += `else if (${convertIf(match[1])}){`;
        } else if (match = line.match(initial_types.else)) {
            exec_code += `else {`
        } else if (match = line.match(initial_types.for)) {
            exec_code += `for (const ${abc_list[for_count]} of ${convertArg(match[1])}) {vars["${match[2]}"]=${abc_list[for_count]};`
            var_list.push(match[2].trim());
            for_count ++;
        } else if (match = line.match(initial_types.funcs)) {
            exec_code += convertFuncs(line)+";";
        }

        if (input_flg) {
            exec_code += "input_count++;";
        }
    }
    exec_code += '}'.repeat(past_index);

    // return exec_code;
    eval(exec_code);
    return output_list.join("\n");
}

export default Convert