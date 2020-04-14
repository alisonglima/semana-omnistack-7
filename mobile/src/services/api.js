import axios from "axios";

const api = axios.create({
    // Se estiver executando a aplicação em um emulador iOS utilizar localhost no lugar do ip;
    // Se estiver executando por usb ou wifi em um Android ou iOS utilizar o ip da máquina como no exemplo abaixo;
    // Se estiver executando no Genymotion utilizar o ip 10.0.3.2 que vai redirecionar para o localhost da sua máquina;
    // Se estiver executando em outro emulador ou o emulador do Android Studio utilizar o ip 10.0.2.2.
    // Caso nenhum funcionar tente utilizar o ip da máquina
  baseURL: "http://192.168.31.227:3333",
});

export default api;
