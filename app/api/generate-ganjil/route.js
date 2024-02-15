export async function POST(req) {
    const {number} = await req.json();
    const res = [];
    if (/^[0-9\b]+$/.test(number)) {
        for (let i = 0; i <= number; i++) {
            if (i%2 !== 0) {
                res.push(i);
            }
        }
    } else {
        res[0] = "Input yang dikirim harus angka!"
    }
    return Response.json({data: res})
}