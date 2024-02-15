export async function POST(req) {
    const {number} = await req.json();
    const res = [];
    if (/^[0-9\b]+$/.test(number)) {
        for (let i = 0; i < number?.toString()?.length; i++) {
            let zeros = "0";
            for (let idx = 0; idx < i; idx++) {
                zeros += "0";
            }
            res.push(number?.toString()[i] + zeros);
        }
    } else {
        res[0] = "Input yang dikirim harus angka!"
    }
    return Response.json({data: res})
}