FROM node:22.5-slim
WORKDIR /japa
COPY . .
RUN npm install
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
EXPOSE 5173
