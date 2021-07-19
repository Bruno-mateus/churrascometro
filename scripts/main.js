

    let inputAdults= document.querySelector('.Adults');
    let inputHours = document.querySelector('.Hours');
    let InputKids = document.querySelector('.Kids');

    function Calc(){
        let adult = inputAdults.value
        let kids = InputKids.value
        let hours = inputHours.value

        let beef = Conversor.meatP(hours) * adult + (Conversor.meatP(hours)/2*kids);
        let beer = Conversor.beerP(hours)*adult;
        let soda = Conversor.sodaP(hours) * adult + (Conversor.sodaP(hours)/2*kids);

        document.querySelector('.result').innerHTML=`

        <ul>
            <li><img src="/img/meat.png">${beef/1000} Kg de carne </li>
            <li><img src="/img/toast.png">${Math.ceil(beer/355)} Latas de cerveja </li>
            <li><img src="/img/soda.png">${Math.ceil(soda/2000)} garrafas de refrigerante 2l </li>    
        </ul>
            
           `
    }

    const Conversor = {
        meatP(hours){
            if(hours>6){
                return 650;
            }else{
                return 400;
            }
        },
        beerP(hours){
            if(hours>6){
                return 2000;
            }else{
                return 1200;
            }
        },
        sodaP(hours){
            if(hours>6){
                return 1500
            }else{
                return 1000
            }
        }

    }



document.querySelector('button').addEventListener('click', Calc)




