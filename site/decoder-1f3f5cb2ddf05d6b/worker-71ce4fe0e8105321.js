import {decompress} from "./brotli-decoder.mjs";
self.onmessage = ({data}) => {
    try {
        if (!Number.isSafeInteger(data.expected) || data.expected < 1 || data.expected > 64 * 1024 * 1024) throw new Error("Invalid startup size");
        const result = decompress(new Uint8Array(data.bytes));
        if (result.byteLength !== data.expected) throw new Error("Decoded startup size differs from the manifest");
        const bytes = result.buffer.slice(result.byteOffset, result.byteOffset + result.byteLength);
        self.postMessage({id: data.id, bytes}, [bytes]);
    } catch (error) {
        self.postMessage({id: data.id, error: String(error.message || error)});
    }
};
