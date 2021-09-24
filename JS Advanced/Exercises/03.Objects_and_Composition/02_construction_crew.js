function hydrateWorker (worker) {

    if (worker.dizziness && worker.dizziness === true){
    let requiredWater = 0.1 * worker.weight * worker.experience;
    worker.levelOfHydrated += requiredWater;
    worker.dizziness = false;
    }

    return worker;
}

console.log(hydrateWorker({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }
));