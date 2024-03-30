export async function POST(req: Request, res: Response) {
  const { data, chain } = await req.json();
  if (chain.toLowerCase() === "avail" || chain.toLowerCase() === "celestia") {
    const apiRoute = process.env.VULCAN_API;
    const postResponse = await fetch(`${apiRoute}/${chain.toLowerCase()}`, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
      body: data,
    });

    const jsonResponse = await postResponse.json();

    return new Response(JSON.stringify(jsonResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } else {
    return new Response(JSON.stringify({ error: "Invalid chain" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
