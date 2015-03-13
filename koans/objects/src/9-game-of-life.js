var SAMURAIPRINCIPLE = {};
SAMURAIPRINCIPLE.isCellAliveInNextGeneration = function (isCellAlive, numberOfNeighbours) {
	//throw 'Not implemented!';
    if (numberOfNeighbours === 3 || (numberOfNeighbours === 2 && isCellAlive)) {
        return true;
    }
    return false;


};
