function hydrateWorker (worker) {

    if (worker.dizziness && worker.dizziness === true){
    let requiredWater = 0.1 * worker.weight * worker.experience;
    worker.levelOfHydrated += requiredWater;
    worker.dizziness = false;
    }

    return worker;
}