import type { Config } from "jest";

const config: Config = {
  bail: true, // parar a execução dos testes quando um teste falhar
  preset: "ts-jest",
  testEnvironment: "node"
  
};

export default config;
