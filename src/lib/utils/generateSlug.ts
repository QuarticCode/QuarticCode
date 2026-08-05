export const generateSlug = (name: string) => {
    return name
        .toLowerCase()
        .replace(/[^a-z-0-9]+/g, '-')
        .replace(/^-|-$/g, '-')
}