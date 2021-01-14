"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function helloWorld(req, res) {
    var user = CreateUser_1.default({
        email: 'lucasbarroso23@gmail.com',
        password: '1234',
        techs: [
            'Node.js',
            'React.js',
            { title: 'Javascript', experience: 100 }
        ]
    });
    return res.json(user);
}
exports.helloWorld = helloWorld;
