// Thay đổi nội dung búc thư ở đây
var letterContent = "Em bé của anh ơi, Em là người mà anh yêu nhất trên đời, và anh muốn em biết điều đó hơn bất cứ điều gì. " +
    "Với anh, tình yêu dành cho em là điều quý giá nhất mà anh có được, và chính vì anh yêu em nhiều như vậy nên đôi khi anh không thể tránh khỏi việc cảm thấy ghen hay lo lắng.\n\n" +

    "Anh biết rằng có những lúc anh đã overthinking, và đôi khi những suy nghĩ đó khiến anh cảm thấy bất an, dù không có lý do cụ thể. " +
    "Anh đã tự hỏi nhiều lần rằng liệu đây có phải là một tính xấu của anh hay không, và anh đã suy nghĩ rất nhiều về điều này. " +
    "Anh sợ, anh rất sợ làm công chúa của anh giận hay buồn, anh không muốn công chúa của anh như vậy chút nào.\n\n" +

    "Nhưng anh muốn em biết rằng, tất cả những cảm xúc đó xuất phát từ tình yêu anh dành cho em. " +
    "Chính vì anh yêu em đến nhường nào nên mới có những cảm xúc ấy. " +
    "Anh không muốn điều này làm em khó chịu hay cảm thấy bị áp lực, vì anh biết em rất quan trọng đối với anh. " +
    "Nếu cảm xúc của anh khiến em cảm thấy mệt mỏi hay chán nản, anh thật sự xin lỗi. " +
    "Anh không bao giờ muốn làm em phải cảm thấy như vậy. Anh chỉ muốn trở thành một người tốt hơn, " +
    "không chỉ cho bản thân mình mà còn để xứng đáng với tình yêu mà em dành cho anh.\n\n" +

    "Anh hy vọng chúng ta có thể cùng nhau vượt qua mọi thử thách, " +
    "và anh sẽ cố gắng hết sức để kiểm soát những cảm xúc của mình, " +
    "để chúng không làm tổn thương đến mối quan hệ của chúng ta. " +
    "Anh rất coi trọng cảm nhận của em và anh hy vọng em có thể chia sẻ với anh " +
    "nếu có điều gì làm em không vui hoặc có điều gì em nghĩ rằng anh có thể cải thiện, " +
    "em có thể góp ý cho anh bất cứ lúc nào nhé. " +
    "Anh luôn sẵn sàng lắng nghe và cải thiện bản thân để chúng ta có thể yêu thương nhau tốt hơn, my darling💕";

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})