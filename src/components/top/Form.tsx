import { useState } from "react";
import Convert from "./Convert"

function Form () {
    const [output, setOutput] = useState<string>('');
    const [code, setCode] = useState<string>('')
    const [input, setInput] = useState<string>('');

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const result = Convert(code, input);
            setOutput(result);
          } catch (error) {
            console.error(error);
            setOutput(`エラーが発生しました。`);
          }
    }

    const keyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Tab') {
          event.preventDefault(); // Tabキーのデフォルト動作をキャンセル
          setCode(prevValue => prevValue + '　'); // 半角スペースを追加
        }
      };

    return (
        <div className='p-10 flex flex-col justify-center items-center w-screen'>
            <form className='lg:border lg:p-10 lg:w-5/6 h-[700px] overflow-auto' onSubmit={onSubmit}>
                <p className='text-3xl lg:text-4xl flex justify-center p-5'>日本語プログラミング言語「JAPA」</p>
                <div className="grid lg:grid-cols-[2fr_1fr] gap-4 h-full">
                    <div className="pb-10">
                        <p>コードエリア</p>
                        <textarea className='w-full h-80 border' name='code' wrap="off" value={code} onKeyDown={keyDown} onChange={(e) => setCode(e.target.value)} />
                        
                        <div className='pt-2 pr-2 flex justify-end'>
                             <button className='px-4 py-1 border text-lg rounded-xl' type='submit'>実行</button>
                        </div>

                        <p className="pt-5">入力エリア</p>
                        <textarea className='w-full h-80 border' name='input' onChange={(e) => setInput(e.target.value)} />
                    </div>
                    <div>
                        <p>出力結果</p>
                        <textarea className='w-full h-96 border overflow-hidden bg-green-300 text-black' value={output} name="output" readOnly></textarea>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form