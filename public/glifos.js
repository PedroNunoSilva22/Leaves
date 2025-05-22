let size = 5;
let paintC = 242; //[105, 240, 174];
let backC = 36;
const stkw = size / 4;


let cols = [
    [41, 241, 195],  // VERDE
    [240, 200, 10],  // AMARELO
    [250, 120, 100], // LARANJA
    [65, 120, 220],  // AZUL
    [140, 20, 252]]; // ROXO

let shift = 0;


function unidades(gap, num) {

    push();
    translate(gap, 0);
    let innerGap = size / 5;
    noStroke();
    fill(paintC);
    ellipseMode(CENTER);

    switch (num) {
        case 1:
            ellipse(0, 0, size / 2, size / 2);
            break;
        case 2:
            ellipse(-size / 2 - innerGap, -size / 2 - innerGap, size / 3, size / 3);
            ellipse(-size / 2 - innerGap, size / 2 + innerGap, size / 3, size / 3);
            break;
        case 3:
            ellipse(0, 0, size / 3, size / 3);
            ellipse(-size / 2 - innerGap, -size / 2 - innerGap, size / 3, size / 3);
            ellipse(-size / 2 - innerGap, size / 2 + innerGap, size / 3, size / 3);
            break;
        case 4:
            ellipse(0, 0, size / 3, size / 3);
            ellipse(-size / 2 - innerGap, -size / 2 - innerGap, size / 3, size / 3);
            ellipse(-size / 2 - innerGap, size / 2 + innerGap, size / 3, size / 3);
            ellipse(-size - 2 * innerGap, 0, size / 3, size / 3);
            break;
        case 5:
            ellipse(-size / 2 - innerGap, -size / 2 - innerGap, size / 3, size / 3);
            ellipse(-size / 2 - innerGap, size / 2 + innerGap, size / 3, size / 3);
            ellipse(-size - 2 * innerGap, 0, size / 3, size / 3);
            ellipse(-3 * size / 2 - 3 * innerGap, -size / 2 - innerGap, size / 3, size / 3);
            ellipse(-3 * size / 2 - 3 * innerGap, size / 2 + innerGap, size / 3, size / 3);
            break;

        case 6:
            ellipse(0, 0, size / 3, size / 3);
            ellipse(-size / 2 - innerGap, -size / 2 - innerGap, size / 3, size / 3);
            ellipse(-size / 2 - innerGap, size / 2 + innerGap, size / 3, size / 3);
            ellipse(-size - 2 * innerGap, 0, size / 3, size / 3);
            ellipse(-3 * size / 2 - 3 * innerGap, -size / 2 - innerGap, size / 3, size / 3);
            ellipse(-3 * size / 2 - 3 * innerGap, size / 2 + innerGap, size / 3, size / 3);
            break;

        case 7:
            ellipse(0, 0, size / 3, size / 3);
            ellipse(-size / 2 - innerGap, -size / 2 - innerGap, size / 3, size / 3);
            ellipse(-size / 2 - innerGap, size / 2 + innerGap, size / 3, size / 3);
            ellipse(-size - 2 * innerGap, 0, size / 3, size / 3);
            ellipse(-3 * size / 2 - 3 * innerGap, -size / 2 - innerGap, size / 3, size / 3);
            ellipse(-3 * size / 2 - 3 * innerGap, size / 2 + innerGap, size / 3, size / 3);
            ellipse(-2 * size - 4 * innerGap, 0, size / 3, size / 3);
            break;

        case 8:
            ellipse(-size / 2 - innerGap, -size / 2 - innerGap, size / 3, size / 3);
            ellipse(-size / 2 - innerGap, size / 2 + innerGap, size / 3, size / 3);
            ellipse(-size - 2 * innerGap, 0, size / 3, size / 3);
            ellipse(-3 * size / 2 - 3 * innerGap, -size / 2 - innerGap, size / 3, size / 3);
            ellipse(-3 * size / 2 - 3 * innerGap, size / 2 + innerGap, size / 3, size / 3);
            ellipse(-2 * size - 4 * innerGap, 0, size / 3, size / 3);
            ellipse(-5 * size / 2 - 5 * innerGap, -size / 2 - innerGap, size / 3, size / 3);
            ellipse(-5 * size / 2 - 5 * innerGap, size / 2 + innerGap, size / 3, size / 3);
            break;

        case 9:
            ellipse(0, 0, size / 3, size / 3);
            ellipse(-size / 2 - innerGap, -size / 2 - innerGap, size / 3, size / 3);
            ellipse(-size / 2 - innerGap, size / 2 + innerGap, size / 3, size / 3);
            ellipse(-size - 2 * innerGap, 0, size / 3, size / 3);
            ellipse(-3 * size / 2 - 3 * innerGap, -size / 2 - innerGap, size / 3, size / 3);
            ellipse(-3 * size / 2 - 3 * innerGap, size / 2 + innerGap, size / 3, size / 3);
            ellipse(-2 * size - 4 * innerGap, 0, size / 3, size / 3);
            ellipse(-5 * size / 2 - 5 * innerGap, -size / 2 - innerGap, size / 3, size / 3);
            ellipse(-5 * size / 2 - 5 * innerGap, size / 2 + innerGap, size / 3, size / 3);

            break;
    }
    pop();
}

function dezenas(gap, num) {

    push();
    
    translate(gap, 0);
    let innerGap = size / 5;
    fill(backC);
    stroke(paintC);
    strokeWeight(stkw);
    ellipseMode(CENTER);

    switch (num) {
        case 1:
            ellipse(0, 0, size / 2, size / 2);
            ellipse(0, 0, size, size);
            break;
        case 2:
            ellipse(-size / 2, -size / 2, size, size);
            ellipse(-size / 2, size / 2, size, size);
            break;
        case 3:
            ellipse(0, 0, size, size);
            ellipse(-size / 2 - innerGap, -size / 2 - innerGap, size, size);
            ellipse(-size / 2 - innerGap, size / 2 + innerGap, size, size);
            break;
        case 4:
            ellipse(0, 0, size, size);
            ellipse(-size / 2 - innerGap, -size / 2 - innerGap, size, size);
            ellipse(-size / 2 - innerGap, size / 2 + innerGap, size, size);
            ellipse(-size - 2 * innerGap, 0, size, size);
            break;
        case 5:
            ellipse(-size / 2 - innerGap, -size / 2 - innerGap, size, size);
            ellipse(-size / 2 - innerGap, size / 2 + innerGap, size, size);
            ellipse(-size - 2 * innerGap, 0, size, size);
            ellipse(-3 * size / 2 - 3 * innerGap, -size / 2 - innerGap, size, size);
            ellipse(-3 * size / 2 - 3 * innerGap, size / 2 + innerGap, size, size);
            break;

        case 6:
            ellipse(0, 0, size, size);
            ellipse(-size / 2 - innerGap, -size / 2 - innerGap, size, size);
            ellipse(-size / 2 - innerGap, size / 2 + innerGap, size, size);
            ellipse(-size - 2 * innerGap, 0, size, size);
            ellipse(-3 * size / 2 - 3 * innerGap, -size / 2 - innerGap, size, size);
            ellipse(-3 * size / 2 - 3 * innerGap, size / 2 + innerGap, size, size);
            break;

        case 7:
            ellipse(0, 0, size, size);
            ellipse(-size / 2 - innerGap, -size / 2 - innerGap, size, size);
            ellipse(-size / 2 - innerGap, size / 2 + innerGap, size, size);
            ellipse(-size - 2 * innerGap, 0, size, size);
            ellipse(-3 * size / 2 - 3 * innerGap, -size / 2 - innerGap, size, size);
            ellipse(-3 * size / 2 - 3 * innerGap, size / 2 + innerGap, size, size);
            ellipse(-2 * size - 4 * innerGap, 0, size, size);
            break;

        case 8:
            ellipse(-size / 2 - innerGap, -size / 2 - innerGap, size, size);
            ellipse(-size / 2 - innerGap, size / 2 + innerGap, size, size);
            ellipse(-size - 2 * innerGap, 0, size, size);
            ellipse(-3 * size / 2 - 3 * innerGap, -size / 2 - innerGap, size, size);
            ellipse(-3 * size / 2 - 3 * innerGap, size / 2 + innerGap, size, size);
            ellipse(-2 * size - 4 * innerGap, 0, size, size);
            ellipse(-5 * size / 2 - 5 * innerGap, -size / 2 - innerGap, size, size);
            ellipse(-5 * size / 2 - 5 * innerGap, size / 2 + innerGap, size, size);
            break;

        case 9:
            ellipse(0, 0, size, size);
            ellipse(-size / 2 - innerGap, -size / 2 - innerGap, size, size);
            ellipse(-size / 2 - innerGap, size / 2 + innerGap, size, size);
            ellipse(-size - 2 * innerGap, 0, size, size);
            ellipse(-3 * size / 2 - 3 * innerGap, -size / 2 - innerGap, size, size);
            ellipse(-3 * size / 2 - 3 * innerGap, size / 2 + innerGap, size, size);
            ellipse(-2 * size - 4 * innerGap, 0, size, size);
            ellipse(-5 * size / 2 - 5 * innerGap, -size / 2 - innerGap, size, size);
            ellipse(-5 * size / 2 - 5 * innerGap, size / 2 + innerGap, size, size);
            break;
    }

    pop();

}

function centenas(gap, num) {


    const mod = 2;
    push();
    
    if (num != 0) {

        translate(gap, 0);
        noFill();
        stroke(paintC);
        strokeWeight(stkw);

        if (num == 1) {
            translate(-1.5 * size, 0);
            shift += 3 * size;
        } else if (num == 2) {

            translate(-size / 4, 0);
            shift += 2 * size;
        } else {
            translate(size * 1.5, 0);
            shift += 1.5 * size;
        }

        for (let i = 0; i < num; i++) {

            if (i > 2) break;

            beginShape();
            vertex(size * mod * 2 - 3 * size / 2 * i, -size * mod);
            vertex(size * mod - 3 * size / 2 * i, -size * mod);
            vertex(-3 * size / 2 * i, 0);
            vertex(size * mod - 3 * size / 2 * i, size * mod);
            vertex(size * mod * 2 - 3 * size / 2 * i, size * mod);
            endShape();

            shift += 2.2 * size;
        }


        switch (num) {
            case 4:
                noStroke();
                push();
                rotate(QUARTER_PI);
                fill(paintC);
                rectMode(CENTER);
                stroke(paintC);
                strokeWeight(stkw);
                rect(-size / 2, size / 2, size, size);
                pop();
                fill(backC);
                ellipse(-sqrt((size / 2) * (size / 2) * 2), 0, size / 2, size / 2);
                break;

            case 5:
                noStroke();
                push();
                rotate(QUARTER_PI);
                fill(paintC);
                rectMode(CENTER);
                stroke(paintC);
                strokeWeight(stkw);
                rect(-size / 2, size / 2, size, size);
                rect(-3 * size / 2, 3 * size / 2, size, size);
                pop();
                fill(backC);
                ellipse(-sqrt((size / 2) * (size / 2) * 2), 0, size / 2, size / 2);
                ellipse(-sqrt((3 * size / 2) * (3 * size / 2) * 2), 0, size / 2, size / 2);
                break;

            case 6:
                noStroke();
                push();
                rotate(QUARTER_PI);
                fill(paintC);
                rectMode(CENTER);
                stroke(paintC);
                strokeWeight(stkw);
                rect(-size / 2, size / 2, size, size);
                rect(-3 * size / 2, size / 2, size, size);
                rect(-size / 2, 3 * size / 2, size, size);
                pop();
                fill(backC);
                ellipse(-sqrt((size / 2) * (size / 2) * 2), 0, size / 2, size / 2);
                ellipse(-sqrt((size) * (size) * 2), -3 * size / 4, size / 2, size / 2);
                ellipse(-sqrt((size) * (size) * 2), 3 * size / 4, size / 2, size / 2);
                break;

            case 7:
                noStroke();
                push();
                rotate(QUARTER_PI);
                fill(paintC);
                rectMode(CENTER);
                stroke(paintC);
                strokeWeight(stkw);
                rect(-size / 2, size / 2, size, size);
                rect(-3 * size / 2, 3 * size / 2, size, size);
                rect(-3 * size / 2, size / 2, size, size);
                rect(-size / 2, 3 * size / 2, size, size);
                pop();
                fill(backC);
                ellipse(-sqrt((size / 2) * (size / 2) * 2), 0, size / 2, size / 2);
                ellipse(-sqrt((size) * (size) * 2), -3 * size / 4, size / 2, size / 2);
                ellipse(-sqrt((size) * (size) * 2), 3 * size / 4, size / 2, size / 2);
                ellipse(-sqrt((3 * size / 2) * (3 * size / 2) * 2), 0, size / 2, size / 2);
                break;

            case 8:
                noStroke();
                push();
                rotate(QUARTER_PI);
                fill(paintC);
                rectMode(CENTER);
                stroke(paintC);
                strokeWeight(stkw);
                rect(-size / 2, size / 2, size, size);
                rect(-3 * size / 2, size / 2, size, size);
                rect(-size / 2, 3 * size / 2, size, size);
                rect(size / 2, size / 2, size, size);
                rect(-size / 2, -size / 2, size, size);

                pop();
                fill(backC);
                ellipse(-sqrt((size / 2) * (size / 2) * 2), 0, size / 2, size / 2);
                ellipse(-sqrt((size) * (size) * 2), -3 * size / 4, size / 2, size / 2);
                ellipse(-sqrt((size) * (size) * 2), 3 * size / 4, size / 2, size / 2);
                ellipse(0, 3 * size / 4, size / 2, size / 2);
                ellipse(0, -3 * size / 4, size / 2, size / 2);
                break;

            case 9:
                noStroke();
                push();
                rotate(QUARTER_PI);
                fill(paintC);
                rectMode(CENTER);
                stroke(paintC);
                strokeWeight(stkw);
                rect(-size / 2, size / 2, size, size);
                rect(-3 * size / 2, size / 2, size, size);
                rect(-size / 2, 3 * size / 2, size, size);
                rect(size / 2, size / 2, size, size);
                rect(-size / 2, -size / 2, size, size);
                rect(-3 * size / 2, 3 * size / 2, size, size);
                pop();
                fill(backC);
                ellipse(-sqrt((size / 2) * (size / 2) * 2), 0, size / 2, size / 2);
                ellipse(-sqrt((size) * (size) * 2), -3 * size / 4, size / 2, size / 2);
                ellipse(-sqrt((size) * (size) * 2), 3 * size / 4, size / 2, size / 2);
                ellipse(0, 3 * size / 4, size / 2, size / 2);
                ellipse(0, -3 * size / 4, size / 2, size / 2);
                ellipse(-sqrt((3 * size / 2) * (3 * size / 2) * 2), 0, size / 2, size / 2);
                break;
        }
    } else shift += 3 * size;

    pop();
}

function milhares(gap, num) {


    push();
    
    if (num == 0) shift += size;
    if (num != 0) {
        if (num < 7) translate(-1.5 * size, 0);

        translate(gap, 0);
        stroke(paintC);
        strokeWeight(stkw);
        

        rotate(QUARTER_PI);

        beginShape();
        noFill();
        vertex(size * 3, -size * 4);
        vertex(size, -size * 4);
        vertex(size, -size);
        vertex(size * 4, -size);
        vertex(size * 4, -size * 3);
        endShape();

        
        beginShape();
        fill(backC);
        vertex(size, -size * 3);
        vertex(size, -size);
        vertex(size * 3, -size);
        endShape();

        beginShape();
        noFill();
        vertex(size * 3, -size * 8);
        vertex(size * 3, -size * 5);
        vertex(size * 2, -size * 5);
        vertex(size * 2, -size * 2);
        vertex(size * 5, -size * 2);
        vertex(size * 5, -size * 3);
        vertex(size * 8, -size * 3);
        endShape();
    }

    fill(backC);
    switch (num) {
        case 1:
            rect(size * 2, -3 * size, size, size);
            shift += 6.5 * size;
            break;
        case 2:
            rect(size * 2, -3 * size, size, size);
            rect(size, -2 * size, size, size);
            shift += 6.5 * size;
            break;
        case 3:
            rect(size * 2, -3 * size, size, size);
            rect(size * 3, -2 * size, size, size);
            rect(size, -4 * size, size, size);
            shift += 6.5 * size;
            break;
        case 4:
            rect(size * 2, -3 * size, size, size);
            rect(size, -2 * size, size, size);
            rect(size * 2, -4 * size, size, size);
            rect(size * 3, -3 * size, size, size);
            shift += 6.5 * size;
            break;
        case 5:
            rect(size * 2, -3 * size, size, size);
            rect(size * 2, -4 * size, size, size);
            rect(size * 3, -3 * size, size, size);
            rect(size * 3, -2 * size, size, size);
            rect(size, -4 * size, size, size);
            shift += 6.5 * size;
            break;
        case 6:
            rect(size * 2, -3 * size, size, size);
            rect(size, -3 * size, size, size);
            rect(size * 3, -2 * size, size, size);
            rect(size, -2 * size, size, size);
            shift += 6.5 * size;
            break;

        case 7:
            beginShape();
            noFill();
            vertex(size * 2, -size * 7);
            vertex(size * 2, -size * 6);
            vertex(size, -size * 6);
            vertex(size, -size * 5);
            vertex(0, -size * 5);
            vertex(0, 0);
            vertex(size * 5, 0);
            vertex(size * 5, -size);
            vertex(size * 6, -size);
            vertex(size * 6, -2 * size);
            vertex(size * 7, -2 * size);
            endShape();

            fill(backC);
            rect(size * 2, -3 * size, size, size);
            rect(size, -3 * size, size, size);
            rect(size * 3, -2 * size, size, size);
            rect(size, -2 * size, size, size);

            rect(0, -size, size, size);
            shift += 7.5 * size;
            break;

        case 8:
            
            beginShape();
            fill(backC);
            vertex(0, -size * 3);
            vertex(0, 0);
            vertex(size * 3, 0);
            endShape();

            beginShape();
            noFill();
            vertex(size * 2, -size * 7);
            vertex(size * 2, -size * 6);
            vertex(size, -size * 6);
            vertex(size, -size * 5);
            vertex(0, -size * 5);
            vertex(0, 0);
            vertex(size * 5, 0);
            vertex(size * 5, -size);
            vertex(size * 6, -size);
            vertex(size * 6, -2 * size);
            vertex(size * 7, -2 * size);
            endShape();

            fill(backC);
            rect(size * 2, -3 * size, size, size);
            rect(size, -3 * size, size, size);
            rect(size * 3, -2 * size, size, size);
            rect(size, -2 * size, size, size);

            rect(0, -4 * size, size, size);
            rect(size * 3, -size, size, size);
            shift += 7.5 * size;
            break;

        case 9:
            beginShape();
            noFill();
            vertex(size * 2, -size * 7);
            vertex(size * 2, -size * 6);
            vertex(size, -size * 6);
            vertex(size, -size * 5);
            vertex(0, -size * 5);
            vertex(0, 0);
            vertex(size * 5, 0);
            vertex(size * 5, -size);
            vertex(size * 6, -size);
            vertex(size * 6, -2 * size);
            vertex(size * 7, -2 * size);
            endShape();

            fill(backC);
            rect(size * 2, -3 * size, size, size);
            rect(size, -3 * size, size, size);
            rect(size * 3, -2 * size, size, size);
            rect(size, -2 * size, size, size);

            fill(backC);
            rect(0, -size, size, size);
            rect(0, -4 * size, size, size);
            rect(size * 3, -size, size, size);
            shift += 7.5 * size;
            break;
    }
    pop();
}

function dezenasMilhar(gap, num) {

    if (num != 0) {
        
        let leafs = Math.ceil(num / 3);
        push();
        translate(gap, 0);
        let i = 0;

        for (; i < leafs - 1; i++) {
            shift += size * 2.5;

            petalaDM(3, i);

        }
        shift += size * 2.5;

        petalaDM(num - i * 3, i);

        pop();
    }


}

function petalaDM(num, leaf) {

    push();
    translate(size * 2.5 * leaf, 0);
    noFill();
    stroke(paintC);
    strokeWeight(stkw);

    rotate(QUARTER_PI);

    line(0, 0, 0, -size * 2);
    line(0, 0, size * 2, 0);

    fill(paintC);
    noStroke();

    rect(size * 2, -size / 2, size * 6, size, size * 2);
    rect(-size / 2, -size * 8, size, size * 6, size * 2);

    fill(backC);
    rect(size * 3, -size / 4, size * 1.5, size / 2, size / 2);
    rect(size * 5.5, -size / 4, size * 1.5, size / 2, size / 2);

    rect(-size / 4, -size * 4.5, size / 2, size * 1.5, size / 2);
    rect(-size / 4, -size * 7, size / 2, size * 1.5, size / 2);

    ellipseMode(CENTER);
    if (num == 1 || num == 3) {

        
        ellipse(size * 5, 0, size / 2, size / 2);
        
        ellipse(0, -size * 5, size / 2, size / 2);

    }
    if (num == 2 || num == 3) {
        
        ellipse(size * 2.5, 0, size / 2, size / 2);
        ellipse(size * 7.5, 0, size / 2, size / 2);

        ellipse(0, -size * 2.5, size / 2, size / 2);
        ellipse(0, -size * 7.5, size / 2, size / 2);
    }
    pop();
}

function centenasMilhar(gap, num) {

    if (num != 0) {
        
        push();
        translate(gap, 0);
        
        ellipseMode(CENTER);


        switch (num) {
            case 1:
                petalaInternaCM(0, 0, true);
                shift += 3 * size;
                break;

            case 2:
                petalaInternaCM(0, size * 2, true);
                petalaInternaCM(0, -size * 4, true);
                shift += 3 * size;
                break;

            case 3:
                petalaInternaCM(0, 0, true);
                petalaInternaCM(size * 4, size * 2, true);
                petalaInternaCM(0, -size * 4, true);
                shift += 7 * size;
                break;

            case 4:
                petalaExternaCM(size * 2, -size * 6, "left");
                petalaInternaCM(-size * 2, size * 4, true);
                petalaInternaCM(0, size * 4, true);
                petalaExternaCM(size * 2, size * 4, "right");
                shift += 3 * size;
                break;

            case 5:
                petalaInternaCM(size, 0, true);
                petalaExternaCM(size * 6, -size * 6, "left");
                petalaInternaCM(-size * 2, size * 4, true);
                petalaInternaCM(0, size * 4, true);
                petalaExternaCM(size * 2, size * 4, "right");
                shift += 8 * size;
                break;

            case 6:
                petalaInternaCM(0, -size * 2, true);
                petalaInternaCM(0, size * 4, true);
                petalaExternaCM(size * 6, -size * 8, "left");
                petalaInternaCM(-size * 2, size * 4, true);
                petalaInternaCM(0, size * 4, true);
                petalaExternaCM(size * 2, size * 4, "right");
                shift += 7 * size;
                break;
            case 7:
                petalaInternaCM(0, 0, true);
                petalaInternaCM(size * 4, -size * 2, true);
                petalaInternaCM(0, size * 4, true);
                petalaExternaCM(size * 6, -size * 8, "left");
                petalaInternaCM(-size * 2, size * 4, true);
                petalaInternaCM(0, size * 4, true);
                petalaExternaCM(size * 2, size * 4, "right");
                shift += 11 * size;
                break;
            case 8:
                petalaExternaCM(size * 2, -size * 6, "left");
                petalaInternaCM(-size * 2, size * 4, true);
                petalaInternaCM(0, size * 4, true);
                petalaExternaCM(size * 2, size * 4, "right");
                petalaExternaCM(size * 5, -size * 12, "left");
                petalaInternaCM(-size * 2, size * 4, true);
                petalaInternaCM(0, size * 4, true);
                petalaExternaCM(size * 2, size * 4, "right");
                shift += 8 * size;
                break;

            case 9:

                push();
                petalaInternaCM(-size * 2, 0, true);
                pop();
                petalaExternaCM(size * 4, -size * 6, "left");
                petalaInternaCM(-size * 2, size * 4, true);
                petalaInternaCM(0, size * 4, true);
                petalaExternaCM(size * 2, size * 4, "right");
                petalaExternaCM(size * 5, -size * 12, "left");
                petalaInternaCM(-size * 2, size * 4, true);
                petalaInternaCM(0, size * 4, true);
                petalaExternaCM(size * 2, size * 4, "right");
                shift += 10 * size;
                break;

        }


        pop();
    } else shift -= 4 * size;

}

function petalaInternaCM(x, y, lines) {
    translate(x, y);
    stroke(paintC);
    strokeWeight(stkw);
    if (lines) {
        line(size, -2 * size, size * 3, -2 * size);
        line(size, 2 * size, size * 3, 2 * size);
    }
    fill(backC);
    arc(size, 0, 4 * size, 4 * size, HALF_PI, -HALF_PI);



    fill(backC);
    stroke(paintC);
    strokeWeight(stkw);
    ellipse(size, 0, size * 2, size * 2);

    fill(paintC);
    noStroke();
    ellipse(size, 0, size, size);
}

function petalaExternaCM(x, y, side) {
    translate(x, y);
    stroke(paintC);
    strokeWeight(stkw);
    fill(backC);
    if (side === "left") arc(size, 0, 4 * size, 4 * size, -PI, HALF_PI);
    else arc(size, 0, 4 * size, 4 * size, -HALF_PI, PI);

    fill(backC);
    stroke(paintC);
    strokeWeight(stkw);
    ellipse(size, 0, size * 2, size * 2);

    fill(paintC);
    noStroke();
    ellipse(size, 0, size, size);
}

function milhao(gap, num) {
    if (num != 0) {

        push();
        translate(gap, 0);

        switch (num) {
            case 1:
                petalaM(size, 0);
                shift += 8 * size;
                break;
        }
        switch (num) {
            case 2:
                petalaM(0, -size * 5, "right2");
                petalaM(0, size * 10, "left2");
                shift += 6 * size;
                break;
        }
        switch (num) {
            case 3:
                petalaM(-size * 2, 0);
                petalaM(size * 3, -size * 6, "right2");
                petalaM(0, size * 12, "left2");
                shift += 6 * size;
                break;
        }
        switch (num) {
            case 4:
                petalaM(size * 3, -size * 8.5, "right4");
                petalaM(-size * 5.5, size * 3.5, "right2");
                petalaM(0, size * 10, "left2");
                petalaM(size * 5, size * 4, "left4");

                shift += 6 * size;
                break;
        }
        switch (num) {
            case 5:
                petalaM(-size * 3, 0);
                petalaM(size * 9, -size * 9, "right4");
                petalaM(-size * 5.5, size * 3.5, "right2");
                petalaM(0, size * 11, "left2");
                petalaM(size * 5.5, size * 3.5, "left4");
                shift += 8 * size;
                break;
        }
        switch (num) {
            case 6:
                petalaM(size * 3, -size * 9, "right4");
                petalaM(-size * 6, size * 3, "right2");
                petalaM(size * 1.5, -size * 4.5, "right3");
                petalaM(0, size * 21, "left3");
                petalaM(-size * 1.5, -size * 4.5, "left2");
                petalaM(size * 6, size * 3, "left4");

                shift += 5 * size;
                break;
        }
        switch (num) {
            case 7:
                petalaM(size * 3, -size * 9, "right4");
                petalaM(-size * 6, size * 3, "right2");
                petalaM(size * 1.5, -size * 4.5, "right3");
                petalaM(0, size * 21, "left3");
                petalaM(-size * 1.5, -size * 4.5, "left2");
                petalaM(size * 6, size * 3, "left4");
                petalaM(-size * 9, -size * 9,);

                shift += 5 * size;
                break;
        }
        switch (num) {
            case 8:
                petalaM(size * 3, -size * 9, "right4");
                petalaM(-size * 6, size * 3, "right2");
                petalaM(size * 1.5, -size * 4.5, "right3");
                petalaM(0, size * 21, "left3");
                petalaM(-size * 1.5, -size * 4.5, "left2");
                petalaM(size * 6, size * 3, "left4");
                petalaM(-size * 10, -size * 12, "right");
                petalaM(0, size * 6, "left");

                shift += 5 * size;
                break;

        }

        switch (num) {
            case 9:
                petalaM(size * 3, -size * 9, "right4");
                petalaM(-size * 6, size * 3, "right2");
                petalaM(size * 1.5, -size * 4.5, "right3");
                petalaM(0, size * 21, "left3");
                petalaM(-size * 1.5, -size * 4.5, "left2");
                petalaM(size * 6, size * 3, "left4");
                petalaM(-size * 10.5, -size * 13.5, "right");
                petalaM(0, size * 9, "left");
                petalaM(size * 1.5, -size * 4.5,);

                shift += 5 * size;
                break;

        }
        pop();
    }


}

function petalaM(x, y, rotator) {
    translate(x, y);
    
    fill(paintC);
    stroke(paintC);
    push();
    if (rotator == "left")
        rotate(-QUARTER_PI / 2);
    else if (rotator == "left2")
        rotate(-QUARTER_PI);
    else if (rotator == "left3")
        rotate(-QUARTER_PI - QUARTER_PI / 2);
    else if (rotator == "left4")
        rotate(-HALF_PI);
    else if (rotator == "right")
        rotate(QUARTER_PI / 2);
    else if (rotator == "right2")
        rotate(QUARTER_PI);
    else if (rotator == "right3")
        rotate(QUARTER_PI + QUARTER_PI / 2);
    else if (rotator == "right4")
        rotate(HALF_PI);
    beginShape();
    curveVertex(0, 0); // the first control point
    curveVertex(0, 0); // is also the start point of curve
    curveVertex(size * 3, -size * 1.5);
    curveVertex(size * 4.5, 0);
    curveVertex(size * 3, size * 1.5);
    curveVertex(0, 0); // the last point of curve
    curveVertex(0, 0); // is also the last control point
    endShape();

    ellipse(size * 3, 0, size * 3, size * 3);

    stroke(backC);
    strokeWeight(2);
    line(size * 3 - size / 3, size / 3, size * 3 + size / 3, -size / 3);   //  /
    line(size * 3 - size / 3, -size / 3, size * 3 + size / 3, size / 3);   //  \
    pop();
}
