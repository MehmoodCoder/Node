

const SeesionIdToMap = new Map()

export function setUser(id, user) {
    SeesionIdToMap.set(id, user)
}

export function getUser(id) {
    SeesionIdToMap.get(id)
}