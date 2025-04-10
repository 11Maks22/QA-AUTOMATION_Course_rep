export function expectStatus200(response: { status: number }): void {
    expect(response.status).toBe(200);
}

export function expectHasId(data: Record<string, any>): void {
    expect(data).toHaveProperty('id');
}

export function expectHasProperty(data: Record<string, any>, property: string, value?: any): void {
    if (value !== undefined) {
        expect(data).toHaveProperty(property, value);
    } else {
        expect(data).toHaveProperty(property);
    }
}
