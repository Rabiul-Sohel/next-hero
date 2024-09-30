//export const dynamic = 'force-dynamic' //it will work when its build
export  async function GET() {
    return Response.json({
        currentTime: new Date().toLocaleTimeString()
    })
}