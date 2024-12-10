export async function getCartItems() {
    return fetch('//dummyjson.com/test')
        .then(res => res.json())
}

export function testFunction() {
    return JSON.stringify({
        status: "ok",
        result: [
            {
                name: "ورزشس",
                id: 1
            },
        ]
    })
}

export const name = "John"