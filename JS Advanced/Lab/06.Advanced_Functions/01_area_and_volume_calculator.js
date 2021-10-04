function solve(area, vol, input) {
    const cubes = JSON.parse(input);
    const result = [];

    for (let cube of cubes) {
        const cubeArea = area.apply(cube);
        const cubeVol = vol.apply(cube);

        result.push({
            area: cubeArea,
            volume: cubeVol
        });
    }

    return result;
}

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

function area() {
    return Math.abs(this.x * this.y);
};