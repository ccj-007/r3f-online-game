/**
 * 得到旋转角度
 * 
 * @param {*} directionObj 
 * @returns 
 */

export const getRadians = (directionObj) => {
    const { forward, back, left, right, jump } = directionObj
    let direction = ''

    // ///////// 设置角度和运动 /////////////
    //               上 Math.PI
    // 左  -Math.PI / 2        右   Math.PI / 2
    //                  下 0
    const angleMap = {
        'n': Math.PI,
        's': 0,
        'w': -Math.PI / 2,
        'e': Math.PI / 2,
        'ne': (3 * Math.PI) / 4,
        'se': (Math.PI) / 4,
        'ws': (-Math.PI) / 4,
        'wn': (-3 * Math.PI) / 4,
    }

    if (forward && !back && !left && !right) {
        direction = 'n'
    } else if (back && !forward && !left && !right) {
        direction = 's'
    } else if (left && !back && !forward && !right) {
        direction = 'w'
    } else if (right && !back && !forward && !left) {
        direction = 'e'
    } else if (right && !back && forward && !left) {
        direction = 'ne'
    } else if (right && back && !forward && !left) {
        direction = 'se'
    } else if (!right && back && !forward && left) {
        direction = 'ws'
    } else if (!right && !back && forward && left) {
        direction = 'wn'
    }

    return direction ? angleMap[direction] : null
}