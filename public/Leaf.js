class Leaf {
    constructor(pos, rot, step, data) {
        this.x = pos[0];
        this.y = pos[1];
        this.rot = rot;
        this.step = step;
        this.data = data;
    }


    display(posDistrict) {

        let num = this.data.total;
        shift = 0;

        push();
        if (posDistrict === undefined) {
            translate(this.x, this.y);
        } 
        rotate(this.rot);


        let nums = parseInt(num).toString(10).split('').map(Number);
        let numsTotal = nums.length;
        let digit = numsTotal;
        let digitX = nums[0];
        rectMode(CORNER);
        noStroke();


        if (numsTotal > 6) {    // 1.000.000
           
            milhao(this.step + shift, digitX);
            digit--;
            digitX = nums[numsTotal - digit];
        }
        if (numsTotal > 5) {    // 100.000

            centenasMilhar(this.step + shift, digitX);
            digit--;
            digitX = nums[numsTotal - digit];

        }
        if (numsTotal > 4) {    // 10.000

            dezenasMilhar(this.step + shift, digitX);

            digit--;
            digitX = nums[numsTotal - digit];

        }
        if (numsTotal > 3) {    // 1.000

            milhares(this.step + shift, digitX);
            digit--;
            digitX = nums[numsTotal - digit];

        }
        if (numsTotal > 2) {    // 100
            centenas(this.step + shift, digitX);

            digit--;
            digitX = nums[numsTotal - digit];

        }
        if (numsTotal > 1) {    // 10

            dezenas(this.step + shift, digitX);
            digit--;
            digitX = nums[numsTotal - digit];

        }
        if (numsTotal > 0) {    // 1
            unidades(this.step + shift, digitX);
        }


        ////////////////////////////////////////////////////////////////
        //                  CAULE
        ////////////////////////////////////////////////////////////////

        stroke(cols[floor(random(cols.length))]);
        
        strokeWeight(stkw);
        line(0, 0, shift + 30, 0);
        noFill();
        let rand = random(4)
        if (rand < 1) {
            line(shift + 30, 0, shift + 35, 5);
            line(shift + 30, 0, shift + 35, -5);
        } else if (rand < 2) {
            line(shift + 30, 0, shift + 25, 5);
            line(shift + 30, 0, shift + 25, -5);
        } else if (rand < 3) {
            line(shift + 25, -5, shift + 25, 5);
            line(shift + 25, -5, shift + 30, -5);
            line(shift + 25, 5, shift + 30, 5);
        } else {
            ellipse(shift + 32.5, 0, 5, 5);
        }

        pop();

    }

    overing(elem) {
        if (elem === "g") {

            leafDetails = true;
            
            push();
            fill(40);
            rect(mouseX, mouseY, 300, 2000);
            for (let c = 0; c < this.data.amount.length; c++) {
                fill(0, 230, 120);
                ellipse(1000 + c * 50, 1000, 15, 15);
            }

            translate(mouseX, mouseY);
            rotate(-HALF_PI - this.rot);
            scale(6, 6);
            this.display(this);
            
            $('#defaultCanvas0 > svg > g:nth-child(3) > g:last-child > g:nth-child(1) > g > g > path:first-child').each(function () {
            
                $(this).prependTo($(this).parent());
            });
            $('#defaultCanvas0 > svg > g:nth-child(3) > g:last-child').addClass("details");

            pop();
          
            for (const prop in this.data) {
                for (let v = 0; v < this.data[prop].length; v++) {
                    let val = this.data[prop][v];
                    $("#sidebar").append('<li>' + prop + ' : ' + val + '</li>');
                }
            }

            return true;
        } else return false;
    }

    updateVal(val) {
        this.data = val;
    }
}