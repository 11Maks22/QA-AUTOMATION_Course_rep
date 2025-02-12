
function sayHello(){
    console.log("   Hello, Mad World!");
}

function doSomeJob(name, age, job){
    sayName(name);
    sayAge(age);
    sayJob(job);
}

function sayName(name){
    console.log("   Hello, " + name);
}

function sayAge(age){
    console.log("   You are - " + age + " years old");
}

function sayJob(job){
    let jobInternal;
    if (! job) {
        jobInternal = {role: 'Unemployed'};
    }else{
        jobInternal = job;
    }

    console.log("   You are a ", jobInternal);
}

sayHello();
doSomeJob("Maks Ditrix", 35, {role: 'GeneralQA', seniority: 'Middle'});

console.log("................................");
