export interface IPosition {
    lat: string
    lng: string
}

export interface IPositionIndexed extends IPosition {
    index: number
}