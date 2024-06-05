import { IPosition } from '@/interfaces/position';
import { positionsData } from '../../assets/positionsData';

export const getRealTimeCoordinates = (index: number): { position: IPosition, dataLength: number } => {
    const dataLength = positionsData.length
    const position = positionsData[index]
    return { position, dataLength }
}