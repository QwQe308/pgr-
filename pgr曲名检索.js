var musiclist = [
"db doll",
"もぺもぺ",
"next time",
"dash",
"rubbish sorting",
"云女孩",
"sparkle new life",
"aphasia",
"wavetapper",
"萤火虫の怨",
"dead soul",
"snow desert",
"electron",
"万吨匿名信",
"Äventyr",
"开心病",
"风屿",
"華灯爱",
"get back",
"orthodox",
"end me",
"eltaw",
"狂喜蘭舞",
"parallel retrogression(game ver)",
"the mountain eater",
"find_me",
"drop it",
"shadow",
"marenol",
"magenta potion",
"hardcore kwaya",
"cervelle connexion",
"träne",
"speed up!",
"modulus",
"khronostasis katharsis",
"大和撫子-wild dances-",
"starduster",
"burn",
"doppelganger",
"sein",
"better graphic animation",
"雪降",
"aleph-0",
"sigma",
"palescreen",
"ripper",
"glaciaxion",
"eradication catastrophe",
"credits",
"dlyrotz",
"engine x start!!(melody mix)",
"光",
"winter cube",
"混乱-confusion",
"cipher:/2&//<|0",
"fuli auto shooter",
"human",
"[praw]",
"cereris",
"pixel rebelz",
"non-melodic ragez(mug edit)",
"sultan rage",
"class memories",
"-surrealism-",
"bonus time",
"energy synergy matrix",
"nya!!!",
"junxion between life and death(vip mix)",
"cryout",
"reimei",
"尊师 ~ the guru ~",
"spasmodic",
"leave all behind",
"colorful days",
"micro.wav",
"重生",
"no one yes man",
"望影の方舟six",
"igallta",
"water",
"miracle forest(vip mix)",
"mobilys",
"lyrith-迷宫",
"xing",
"final step",
"cthugha",
"initialize",
"桜樹街道",
"get ready!!",
"volcanic",
"goodtek",
"goodbounce",
"goodworld",
"goodfortune",
"goodrage",
"infinity heaven",
"disorder",
"crosssoul",
"another me",
"mechanted",
"life flashes before weeb eyes",
"break through the barrier",
"chronostasis",
"Ποσειδών",
"apocalyptic",
"游园地",
"with you",
"unorthodox thoughts"
]
function input(){
    var inputstr = prompt("输入已经猜出的字(示例:sig)：")
    var list = musiclist
    for(i=0;i<inputstr.length;i+=1){
        var right = []
        for(music in list){
            if(has(list[music],inputstr[i])){
                right.push(list[music])
            }
        }
        list = right
    }
    if(list.length==0){
        document.getElementById("output").innerHTML = "未找到!"
        return
    }    
    var showstr = ""
    for(i in list){
        showstr += list[i] + "<br>"
    }
    document.getElementById("output").innerHTML = showstr
    musiclist = list
}
function input2(){
    var inputstr = prompt("输入已经排除的字(示例:sig)：")
    var list = musiclist
    for(i=0;i<inputstr.length;i+=1){
        var right = []
        for(music in list){
            if(!has(list[music],inputstr[i])){
                right.push(list[music])
            }
        }
        list = right
    }
    if(list.length==0){
        document.getElementById("output").innerHTML = "未找到!"
        return
    }    
    var showstr = ""
    for(i in list){
        showstr += list[i] + "<br>"
    }
    document.getElementById("output").innerHTML = showstr
    musiclist = list
}
function check(){
    var inputstr = "abcdefghijklmnopqrstuvwxyz "//仅英文
    var list = musiclist
    var right = ["a",0]
    for(i=0;i<inputstr.length;i+=1){
        var rightnum = 0
        for(music in list){
            if(has(list[music],inputstr[i])){
                rightnum+=1
            }
        }
        if(rightnum>right[1]){
            right[0] = inputstr[i]
            right[1] = rightnum
        }
        
    }
    if(right[0]==" "){
        document.getElementById("output2").innerHTML = "最大出现率的是字符"+"{空格}"+"(单首重复仅记一次)"
        return
    }
    document.getElementById("output2").innerHTML = "最大出现率的是字符"+right[0]+"(单首重复仅记一次)"
    musiclist = list
}
function has(item,str){
    return item.indexOf(str)+1
}