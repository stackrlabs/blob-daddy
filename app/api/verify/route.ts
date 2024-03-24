export async function POST(req: Request, res: Response) {
    const { jobId } = await req.json();
    const apiRoute = process.env.VULCAN_API;
    const postResponse = await fetch(`${apiRoute}/status/${jobId}`, {
      method: "GET",
    });
    
    const jsonResponse = await postResponse.json();
    
    return new Response(JSON.stringify(jsonResponse), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  