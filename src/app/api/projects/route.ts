import { TProject } from "@/src/types/project";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://api.github.com/users/QuarticCode/repos?visibility=all",
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
        },
      },
    );

    const typing = (await response.json()) as Array<TProject>;

    const repos: Array<TProject> = [];

    typing.map((t) => {
      repos.push({
        created_at: t.created_at,
        description: t.description,
        html_url: t.html_url,
        name: t.name,
      });
    });

    return NextResponse.json({
      repos,
    });
  } catch (error) {
    return NextResponse.json({ error: `${error}` }, { status: 500 });
  }
}
