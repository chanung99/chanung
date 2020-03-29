
        

        
        $(function () {
          


            var text = document.getElementById("textType");

            var typewriter = new Typewriter(text, {
                loop: true
            });

            typewriter.typeString('안녕하세요')
                .pauseFor(700)
                .deleteAll()
                .typeString('Developer')
                .pauseFor(700)
                .deleteChars(9)
                .typeString('왕찬웅의 포트폴리오 입니다.')
                .pauseFor(2000)
                .start();






        })

        function LadingView(){
            window.open("popol.html");
        }

        function hoGall(){
            window.open("hoGall.html");
        }
        function home(){
            window.scrollTo(0, 0);
        }

        function about(){
            window.scrollTo(0, 835);
        }

        function project(){
            window.scrollTo(0, 1365);
        }
        

        
         window.onload =function(){
             setTimeout(function(){
                 scrollTo(0,0);

             },100);

         }