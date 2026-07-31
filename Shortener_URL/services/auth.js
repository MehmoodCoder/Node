

const SeesionIdToMap = new Map()

export function setUser(id, user) {
    SeesionIdToMap.set(id, user)
}

export function getUser(id) {
    return SeesionIdToMap.get(id)
}