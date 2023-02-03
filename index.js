function captura(){
    let menu = document.getElementById("nomest").value;

    switch (menu) {
        case '1' : 
            n = parseInt(prompt("INGRESA UN NUMERO"))
                
                if(n > 99 & n < 1000){
                    a = Math.trunc (n/100)
                    b = n % 10

                    if (a == b){
                        alert("EL DIGITO "+ a + " ES IGUAL AL DIGITO " + b)
                    }
                    else{
                        alert("EL DIGITO "+ a + " ES DIFERENTE AL DIGITO " + b)

                    }
                }
                else{
                    alert("EL NUMERO " + n + " NO ES DE TRES DIGITOS ")
                }
            break;

        case '2' :
            lista = [2,3,5,7]
            i = 0
            n = parseInt(prompt("INGRESE UN NUMERO"))
            if(n > 99 & n < 1000){
                c = n % 10
                n = Math.floor(n / 10)
                b = n % 10
                a = Math.floor(n /10) 
            

                if (a in lista){
                    i= i+1
                }

                
                if (b in lista){
                    i= i+1
                }

                if (c in lista){
                    i= i+1
                }
            

                alert("Digitos primos: "+ i)
            }
            else{
                alert("NO SON IGUALE")
            }
            break;
        
        case '3' :
            n = parseInt(prompt("INGRESE UN NUMERO"))
            i = 0

            if (n > 99 & n < 1000){
                c = n % 10
                n = Math.trunc (n / 10)
                b = n % 10
                a = Math.trunc (n / 10)

                if(a % 2 == 0){
                    i = i + 1
                }
                if(b % 2 == 0){
                    i = i + 1
                }
                if(c % 2 == 0){
                    i = i + 1
                }

                alert("DIGITOS PARES :" + i)

            }
            else{
                alert("EL NUMERO " + n + "NO ES DE 3 DIGITOS")
            }
            break;
        
        case '4' :
            num = prompt("ESCRIBA UN NUMERO")
            let dig1 = parseInt(num.charAt(0))
            let dig2 = parseInt(num.charAt(1))
            let dig3 = parseInt(num.charAt(2))

            if(dig1===dig2+dig3){
                alert("EL PRIMER NUMERO ES IGUAL A LA SUMA DEL SEGUNDO Y EL TERCERO")
            }
                else if (dig2===dig1+dig3){
                    alert("EL SEGUNDO NUMERO ES IGUAL A LA SUMA DEL PRIMER Y EL TERCER NUMERO")
                }
                else if (dig3===dig1+dig2){
                    alert("EL TERCER NUMERO ES IGUAL A LA SUMA DEL PRIMER NUMERO Y EL SEGUNDO")
                }
                else{
                    alert("NINGUNO ES IGUAL A LA SUMA DEL OTRO")
                }
                break;
        
        case '5' :
            num = parseInt(prompt("INGRESE UN NUMERO DE CUATRO DIGITOS: "))
            if (num>=1000 & num<=9999){
                d1 = Math.trunc (num/1000)%10
                d2 = Math.trunc (num/100)%10
                d3 = Math.trunc (num/10)%10
                d4 = Math.trunc (num%10)%10

                sum = d1 + d2 + d3+ d4
                alert("LAS SUMA DE LOS 4 DIGITOS ES: " + sum)
            }
            else{
                alert("EL NUMERO DEBE SER DE 4 DIGITOS")
            }
            break;

        case '7' :
            let num = parseInt(prompt("INGRESA UN NUMERO: "));
            let numpr = true;
            if(num >1 & num <50){
                for (let i = 2; i < num / 2; i++){
                    if(num % i === 0){
                        numpr = false;
                    }
                }

                if(numpr){
                    alert(num + " SI ES UN NUMERO PRIMO");
                } else{
                    alert(num + " NO ES UN NUMERO PRIMO")
                }
            }
            else{
                alert("EL NUMERO ES MAYOR A 50 O MENOR A 1")
            }
            break;

            case '8' :
                num = parseInt(prompt("INGRESE UN NUMERO DE CUATRO DIGITOS: "))
            if (num>=10000 & num<=99999){
                d1 = Math.trunc (num/10000)%10
                d2 = Math.trunc (num/1000)%10
                d3 = Math.trunc (num/100)%10
                d4 = Math.trunc (num/10)%10
                d5 = Math.trunc (num%10)%10
            }
                if(d1==d5 & d2==d4){
                    alert("EL NUMERO " + num +  " ES CAPICUA")
                }
                else{
                    alert(num + " NO ES CAPICUA")
                }
            break;

        
        case '9' :
                num = parseInt(prompt("INGRESE UN NUMERO DE CUATRO DIGITOS: "))
            if (num>=1000 & num<=9999){
                d1 = Math.trunc (num/1000)%10
                d2 = Math.trunc (num/100)%10
                d3 = Math.trunc (num/10)%10
                d4 = Math.trunc (num%10)%10
            }
                if(d2==d3){
                    alert("EL SEGUNDO Y EL PENULTIMO NUMERO SON IGUALES")
                }
                else{
                    alert("NO SON IGUALES")
                }
        break;

        case '10' :
            num = parseInt(prompt("INTRODUZCA EL NUMERO 10"))
            if (num == 10){
                alert("HAZ INTRODUCIDO EL NUMERO 10")
            }
            else{
                alert("ESTE NO ES EL NUMERO 10")
            }
            break;

        case '11' :
                n = parseInt(prompt("INGRESE UN NUMERO"))

                if(n % 7 == 0){
                    alert("EL NUMERO " + n + " ES MULTIPLO DE 7 ")
                }
                else{
                    alert("EL NUMERO  " + n + " NO ES MULTIPLO DE 7 ")

                }
                break;

        case '12' :
            a = parseInt(prompt("INGRESA UN NUMERO: "))
            b = parseInt(prompt("INGRESA OTRO NUMERO: "))

            if (a >= b){
                document.write("NO SE PUEDE IMPRIMIR LA SERIE")
            }
            else{
            }
                while (a <= b){
                    document.write("," + a)
                    a += 1
                }
        
            break;

        case '15':
            for (var i = 1, a = 101; i < a; i += 1) {
                document.write("<br>" + i);
            }

            break;

        case '16':
            for (var i = 20, a = 201; i < a; i += 2) {
                document.write("<br>" + i);
              }

            break;

        case '17':
            for (var i = 25, a = 205; i < a; i += 1) {
                if (i % 10 === 6) {
                  document.write("<br>" + i);
                }
              }
        
            break;

        case '19':
            num1 = parseInt(prompt("INGRESA UN NUMERO: "))
            num2 = parseInt(prompt("INGRESA OTRO NUMERO: "))

            if (num1 >= num2){
                document.write("NO SE PUEDE IMPRIMIR LA SERIE")
            }
            else{
            }
            while (num1 <= num2){
                document.write("<br>" + num1)
                num1 += 1
            }

            break;

        case '21':
            while(a <= b){
                if(a % 5 == 0){
                    document.write(a + ",");
                }
                a = a + 1;
            }

            break;

        case '22':
            let b = 60;
            let a = 1
            while(a <= b){
            if(a % 3 == 0){
            document.write(a + ",");
            }
            a = a + 1;
            }
            break;

    }
    
}