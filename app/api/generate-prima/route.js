export async function POST(req) {
    const {number} = await req.json();
    const res = [];
    if (/^[0-9\b]+$/.test(number)) {
        const nonprima = []
        for (let i = 0; i <= number; i++) {
            let checkval = true
            for(let idx = i-1; idx>1; idx--) {
                if (i%idx === 0) {
                    checkval = false
                } 
            }
            if (checkval) {
                res.push(i);
            }
        }
    } else {
        res[0] = "Input yang dikirim harus angka!"
    }
    
    return Response.json({data: res})
}