import jwt, { JwtPayload } from 'jsonwebtoken'; 

export const decodeToken = (token: string): string | JwtPayload | null => {
    try {
        const decodedToken = jwt.verify(token, "defaultSecret") as JwtPayload; 
        
        return decodeToken;
        // if ('userId' in decodedToken) {
        //     return decodedToken.userId; 
        // } else {
        //     console.error("User ID not found in token");
        //     return null; 
        // }
    } catch (error) {
        console.error("Error decoding token:", error);
        return null; 
    }
};
