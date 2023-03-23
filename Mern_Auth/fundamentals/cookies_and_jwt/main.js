/*
const cookieParser = requires('cookie-parser');
...
app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

res.cookie('mycookie', 'mydata', {httpOnly: true}).json({
    message: "This response has a cookie"
})
*/