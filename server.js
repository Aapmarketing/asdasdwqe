const express = require('express');
const app = express();

const port = process.env.PORT || 5000;
const myLiffId = process.env.MY_LIFF_ID;

app.use(express.static('public'));

app.get('/test',function(req,res) {
    res.json({message:'test'})
});

app.get('/', function(req, res) {
    test()
    res.json({message:'connected!'});
    // res.json({id: myLiffId});
});

app.listen(port, () => console.log(`app listening on port ${port}!`));

async function test(){
    await liff.init({liffId:"1656291917-KwOD9bba"})
    await liff.shareTargetPicker([
        {
            type:"flex",
            altText:"Flex Messege share from target picker",
            content:{
                        "type": "bubble",
                        "hero": {
                            "type": "image",
                            "url": "https://www.img.in.th/images/83504a72a7c2e847fbc48ffdef7f430a.jpg",
                            "size": "full",
                            "aspectRatio": "20:13",
                            "aspectMode": "cover",
                            "backgroundColor": "#C53636FF",
                            "action": {
                            "type": "uri",
                            "label": "Line",
                            "uri": "https://liff.line.me/1656291917-KwOD9bba"
                            }
                        },
                        "body": {
                            "type": "box",
                            "layout": "vertical",
                            "backgroundColor": "#D7F55DFF",
                            "borderColor": "#CBF000FF",
                            "contents": [
                            {
                                "type": "text",
                                "text": "เว็บ ดี ชื่อ มงคล",
                                "weight": "bold",
                                "size": "xl",
                                "color": "#C53636FF",
                                "align": "center",
                                "contents": []
                            }
                            ]
                        },
                        "footer": {
                            "type": "box",
                            "layout": "vertical",
                            
                            "spacing": "sm",
                            "backgroundColor": "#D7F55DFF",
                            "contents": [
                            {
                                "type": "button",
                                "action": {
                                "type": "uri",
                                "label": "ติดต่อแอดมิน",
                                "uri": "https://liff.line.me/1656291917-KwOD9bba"
                                },
                                "color": "#821717FF",
                                "margin": "xxl",
                                "height": "sm",
                                "style": "primary"
                            },
                            {
                                "type": "button",
                                "action": {
                                "type": "uri",
                                "label": "สอบถามโปรโมชั่น",
                                "uri": "https://liff.line.me/1656291917-KwOD9bba"
                                },
                                "color": "#821717FF",
                                "height": "sm",
                                "style": "primary"
                            },
                            {
                                "type": "button",
                                "action": {
                                "type": "uri",
                                "label": "สมัครสมาชิก",
                                "uri": "https://liff.line.me/1656291917-KwOD9bba"
                                },
                                "color": "#821717FF",
                                "style": "primary"
                            },
                            {
                                "type": "spacer",
                                "size": "xxl"
                            }
                            ]
                        }
                        }                 
    
    }
    ])
    liff.closeWindow()
}
