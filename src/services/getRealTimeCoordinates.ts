import { IPosition } from '@/interfaces/position';
import { positionsData } from '../../assets/positionsData';

export const getRealTimeCoordinates = async (index: number): Promise<IPosition> => {
    let currentIndex = index
    return new Promise((res, _rej) => {
        if (currentIndex === positionsData.length - 1) {
            currentIndex = 0
        }
        const position = positionsData[index];
        currentIndex++
        setTimeout(() => {
            res(position)
        }, 3000);
    });
};