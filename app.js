const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))


/*스태틱선언 public폴더 안에는 전부다 정적인 파일을 넣어줄거야 란 뜻*/
app.use(express.static('public'))
// 정적으로 지정해준곳은 로컬-루트폴더가 된다 **이부분 굉장히 중요**

app.use(express.static('stylesheet05/style'))



const path = require('path');
const router = express.Router();

router.get('/', function (req, res) {
res.sendFile(path.join(__dirname + '/index.html'));
//__dirname : It will resolve to your project folder.
});

router.get('/external01', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/external.html'));
    //__dirname : It will resolve to your project folder.
    });

    //      /external01 은 localhost:3000/external01로 불러올때 쓴다
    //  뒤에 /views/external.html은 루트폴더를 기준으로 작성한다

    //   바로 크롬에서 localhost:3000/external01이라고 치면 Cannot GET /external01라고 뜨는데
    // 서버를 정지했다가 다시 커야됨



router.get('/main', function (req, res) {
    res.sendFile(path.join(__dirname + '/stylesheet05/main.html'));
});
router.get('/stylesheetNo', function (req, res) {
    res.sendFile(path.join(__dirname + '/stylesheet05/stylesheetNo.html'));
});
router.get('/stylesheet01', function (req, res) {
    res.sendFile(path.join(__dirname + '/stylesheet05/stylesheet01.html'));
});






app.use('/', router);



app.listen(port, () => console.log(`Example app listening on port ${port}!`))

