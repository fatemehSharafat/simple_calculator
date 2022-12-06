

var btnNum = document.getElementsByClassName('btnNum');
btnNum =Array.from( document.getElementsByClassName('btnNum'));// دسترسي به دكمه ها 
var operator = ['+','-','*','/'];//تعريف عملگرا
var ashar = false;// مميز يا اعشار 
console.log(btnNum);

function key(){
for(var i=0 ; i< btnNum.length ; i++)//حلقه اجرا شه تازماني  كه به آخر ارايه  btnNum برسيم
{
    btnNum[i].onclick =function (e){//زماني كه دكمه i كليك شد اجرا كن تابعه زير رو
        var output = document.getElementById('dispaly');// فراخواني صفحه نمايش 
        var outputVal = output.value;//دسترسي به مقدار داخل صفحه نمايش
        var btnval =  this.value;//دسترسي به مقدار داخل دكمه ها
        if (btnval == 'C'){//اگه مقدار داخلش c f,n
            output.value = "";//مقدار داخل صفحه نمايش رو خالي كن
            ashar = false;
        }
        else if(btnval == '='){//اگه دكمه = بود
            var modele = outputVal ; //مقدار داخل صفحه نمايش رو بريز توي متغغير جديد 
            var lastChar = modele[modele.length - 1];// اخرين كاركتر ارايه
            if (operator.indexOf(lastChar) > -1|| lastChar == '.')//اگه تعداد عملگر اخرين خونه ارايه صفر يا بيشتر بود يا  اخرين كاركتر كاركتر "." بود
                modele = modele.replace(/.$/,'');//توي معادله "." انتهاي رشته رو بردار و بجاش هيچي نذار
            if(modele)// اگه معادله ايي وجوداشت
                output.value = eval(modele); //معادله رو حل كن جوابشو بريز تو مقدار خروجي 
            ashar = false ;

        }
        else if (operator.indexOf(btnval)>-1){//اگه عملگري در دكمه ها پيدا كردي 
            var lastChar = outputVal[outputVal.length-1];// اخرين مقدار كاركتر ارايه صفحه نمايشي رو فراخواني ميكنه
            if (outputVal != '' && operator.indexOf(lastChar)==-1)//اگه مقدار مجود در صفحه نمايش خالي نبود و اگه عملگري در رشته پدا نكردي
                output.value += btnval;// عبارت داخل دكمه رو به مقار صفحه نمايش اضافه كن
            else if(outputVal == '' && btnval == '-')// در غير اينصورت اگر مقدار خروجي خالي بود و دكمه وارد شده "-" بود
                output.value += btnval;// عبارت داخل دكمه رو به خروجي صفحه نمايش اضافه كن
            if(operator.indexOf(lastChar) > -1 && outputVal.length >1){//اگه تعداد عملگرهاي داخله رشته 0 يا بيشتر بود و اگر طول ارايه خروجي بيشتر از يك بود
                output.value = outputVal.replace(/.$/,btnval);//مقدار خروجي ختم شده رو با مقدار دكمه جابه جا كن
            }
            ashar = false ;
        }
        else if (btnval =='.'){// اگه دكمه وارد شده "." بود
            if(!ashar){//اگه عشار غلط بود
                output.value +=btnval;//مقدار دكمه رو به به انتهاي مقدار خروجي اضافه كن
                ashar= true ;// و مقدار عشار رو برابر درست قرار بده
            }
        }
        else{
            output.value += btnval;// در غير اين صورت عبارت داخل دكمه رو به خروجي اضافه كن
        }
        //حالت هاي ديگه پيش فرض متغيير ها رو خنثي كن. 

    }
}console.log(typeof( btnNum));
}
