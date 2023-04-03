const body = document.querySelector("body")
const hash = document.getElementById("hash")
// Get all the <span> elements
const spanElements = document.querySelectorAll('.charkhanande span');
const span1 = document.getElementById('hash1');
const span2 = document.getElementById('hash2');
const span3 = document.getElementById('hash3');
const span4 = document.getElementById('hash4');
const wordsDiv = document.getElementById('words');
const wordSpans = wordsDiv.querySelectorAll('.word');
const space = document.querySelectorAll(".space")
const hashcat = document.getElementById("hashcat")

// Define an array of alphabets
const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
 '@', '#', '$', '%', '=', ':', '?', '.', '/', '|', '~', '>',
'*', '(', ')', '<', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'm', 'n', 'o', 'p', 'q',
'r', 's', 't', 'u', 'v', 'w', 'x', 'y',
'z'];


const minh = window.innerHeight - (window.innerHeight*1.5)
const maxh = window.innerHeight/2 - 30
const minw = window.innerWidth - (window.innerWidth*1.5)
const maxw = window.innerWidth/2 - 30
// Loop through each word span and set random top and left positions
wordSpans.forEach((span) => {
  span.style.position = "absolute"
  span.style.top = Math.floor(Math.random() * (maxh - minh + 1)) + minh; + 'px';
  span.style.left = Math.floor(Math.random() * (maxw - minw + 1)) + minw; + 'px';
});



var s1 = setInterval(() => {
    const randomAlphabet = alphabets[Math.floor(Math.random() * alphabets.length)];
    span1.innerText = randomAlphabet;
}, 70);
var s2 = setInterval(() => {
    const randomAlphabet = alphabets[Math.floor(Math.random() * alphabets.length)];
    span2.innerText = randomAlphabet;
}, 70);
var s3 = setInterval(() => {
    const randomAlphabet = alphabets[Math.floor(Math.random() * alphabets.length)];
    span3.innerText = randomAlphabet;
}, 70);
var s4 = setInterval(() => {
    const randomAlphabet = alphabets[Math.floor(Math.random() * alphabets.length)];
    span4.innerText = randomAlphabet;
}, 70);


// Update the text of each <span> element with a random alphabet every second
var setin = setInterval(() => {
    spanElements.forEach(span => {
      // Choose a random alphabet from the array
      const randomAlphabet = alphabets[Math.floor(Math.random() * alphabets.length)];
      // Update the text of the <span> element with the random alphabet
      span.innerText = randomAlphabet;
    });
  }, 50);



  var cmatrix = setInterval(() => {
    var matrix = document.createElement("p");
    matrix.classList.add("matrix");
    matrix.innerText=Math.round(Math.random());
    body.appendChild(matrix);
    var x = Math.floor(Math.random() * (window.innerWidth - matrix.offsetWidth));
    var y = Math.floor(Math.random() * (window.innerHeight - matrix.offsetHeight));
    matrix.style.left = x + "px";
    matrix.style.top = y + "px";
    setInterval(() => {
        matrix.remove()
    }, 200);
    
}, 10);

var t2,t3,t4;
// Stop updating the text of the <span> elements when the mouse enters the hash element

function hashHovering(){
    clearInterval(setin);
    clearInterval(cmatrix);
    clearInterval(s1);
    span1.innerText="H"
    t2 = setTimeout(() => {
        clearInterval(s2);
        span2.innerText="a" 
}, "300");
    t3 = setTimeout(() => {
        clearInterval(s3);
        span3.innerText="s" 
}, "600");
    t4 = setTimeout(() => {
        clearInterval(s4);
        span4.innerText="h" 
}, "900");
}

function hashLeaving(){
    clearTimeout(t2)
    clearInterval(s2);
    clearTimeout(t3)
    clearInterval(s3);
    clearTimeout(t4)
    clearInterval(s4);
    setin = setInterval(() => {
        spanElements.forEach(span => {
          // Choose a random alphabet from the array
          const randomAlphabet = alphabets[Math.floor(Math.random() * alphabets.length)];
          // Update the text of the <span> element with the random alphabet
          span.innerText = randomAlphabet;
        });
      }, 50);

      cmatrix = setInterval(() => {
        var matrix = document.createElement("p");
        matrix.classList.add("matrix");
        matrix.innerText=Math.round(Math.random());
        body.appendChild(matrix);
        var x = Math.floor(Math.random() * (window.innerWidth - matrix.offsetWidth));
        var y = Math.floor(Math.random() * (window.innerHeight - matrix.offsetHeight));
        matrix.style.left = x + "px";
        matrix.style.top = y + "px";
        setInterval(() => {
            matrix.remove()
        }, 200);
        
    }, 10);

    s1 = setInterval(() => {
        const randomAlphabet = alphabets[Math.floor(Math.random() * alphabets.length)];
        span1.innerText = randomAlphabet;
    }, 70);
    s2 = setInterval(() => {
        const randomAlphabet = alphabets[Math.floor(Math.random() * alphabets.length)];
        span2.innerText = randomAlphabet;
    }, 70);
    s3 = setInterval(() => {
        const randomAlphabet = alphabets[Math.floor(Math.random() * alphabets.length)];
        span3.innerText = randomAlphabet;
    }, 70);
    s4 = setInterval(() => {
        const randomAlphabet = alphabets[Math.floor(Math.random() * alphabets.length)];
        span4.innerText = randomAlphabet;
    }, 70);
}

hash.addEventListener("mouseenter", hashHovering)

// Start updating the text of the <span> elements again when the mouse leaves the hash element
hash.addEventListener("mouseleave", hashLeaving)

var wr;
hash.addEventListener("click",()=>{
    hash.removeEventListener("mouseenter",hashHovering)
    hash.removeEventListener("mouseleave",hashLeaving)
    hash.classList.add("fadeout")
    setTimeout(() => {
        hash.style.display="none"
        clearInterval(cmatrix);
    }, "900");
    // clearInterval(cmatrix);

    setTimeout(() => {
        wordsDiv.style.color="#6bfc03"
    }, "1500");

    setTimeout(() => {
        wordSpans.forEach((span) => {
            span.style.position = "relative"
            span.style.top = "0px";
            span.style.left = "0px";
          });
    }, "3000");

    setTimeout(() => {
        space.forEach(span=>{
            span.style.width="auto"
    })
        wr = setInterval(() => {
            wordSpans.forEach(span => {
              // Choose a random alphabet from the array
              const randomAlphabet = alphabets[Math.floor(Math.random() * alphabets.length)];
              // Update the text of the <span> element with the random alphabet
              span.innerText = randomAlphabet;
            });
          }, 90);

          wordsDiv.addEventListener("mouseenter",()=>{
            clearInterval(wr)
            document.getElementById("wp").style.display="none"
            document.getElementById("wpp").style.display="flex"
        })
        wordsDiv.addEventListener("mouseleave",()=>{
            document.getElementById("wp").style.display="flex"
            document.getElementById("wpp").style.display="none"
            wr = setInterval(() => {
                wordSpans.forEach(span => {
                  // Choose a random alphabet from the array
                  const randomAlphabet = alphabets[Math.floor(Math.random() * alphabets.length)];
                  // Update the text of the <span> element with the random alphabet
                  span.innerText = randomAlphabet;
                });
              }, 90);
        })
    }, "4500")
})

wordsDiv.addEventListener("click",()=>{
    wordsDiv.classList.add("fadeout")
    setTimeout(() => {
        wordsDiv.style.display="none"
    }, "900");

    setTimeout(() => {
        hashcat.style.display="flex"
        hashcat.style.opacity="1"
        body.style.background="white"
    }, "1100");

})