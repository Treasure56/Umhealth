import { AppSelectOption } from "@/components/form/AppSelect";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function formDataToObject<T = any>(formData: FormData): T {
    return Object.fromEntries(formData.entries()) as T;
}

export function fallbackImage(src?: string): string {
    return !src || !src.toLowerCase().startsWith("http") ? "/images/user-avatar.png" : src;
}

export function capitalizeFirst(s: string): string {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

export function formatNumber(num: number | string, asMoney = false): string {
    if (!num) return "";
    const _num = parseFloat(num.toString()).toFixed(3).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    return asMoney ? `₦${_num}` : _num;
}

export function formatDate(date: string): string {
    const dt = new Date(date);
    const year = dt.getFullYear();
    const month = String(dt.getMonth() + 1).padStart(2, "0");
    const day = String(dt.getDate()).padStart(2, "0");
    return `${month}/${day}/${year}`;
}

export function formatDuration(duration: number | string): string {
    const _duration = Number(duration);
    return _duration < 12 ? `${_duration} months` : `${_duration / 12} years`;
}

export function isVideo(url: string): boolean {
    const ext = url.split(".").pop()?.toLowerCase();
    return ext ? ["mp4", "m4a", "webm"].includes(ext) : false;
}

export function splitStringToNestedArrays(input: string): { v: string; i: number }[][] {
    const result: { v: string; i: number }[][] = [];
    let index = 0;

    const words = input.split(" ");

    for (const word of words) {
        const wordArray: { v: string; i: number }[] = [];

        for (const char of word) {
            wordArray.push({ v: char, i: index });
            index++;
        }

        result.push(wordArray);
        index++; // Account for spaces
    }

    return result;
}

export function buildUrlQuery(obj: Record<string, string | number | boolean | null> | undefined): string {
    if (!obj) return "";
    return (
        "?" +
        Object.entries(obj)
            .map(([key, value]) => `${key}=${encodeURIComponent(value ?? "")}`)
            .join("&")
    );
}

/**
 * Trims the FormData object based on the provided key(s).
 * 
 * @param formData - The FormData object to be trimmed.
 * @param keys - A single key (string) or an array of keys (string[]) to keep in the FormData.
 * @returns A new FormData object containing only the specified keys.
 */
export function trimFormData(formData: FormData, keys: string | string[]): FormData {
    const trimmedData = new FormData();
    const keysToKeep = Array.isArray(keys) ? keys : [keys];

    formData.forEach((value, key) => {
        if (keysToKeep.includes(key)) {
            trimmedData.append(key, value);
        }
    });

    return trimmedData;
}

export function withAll(list: AppSelectOption[], title = ""): AppSelectOption[] {
    return [{ title: `All ${title}`, value: "" }, ...list];
}


export function stripHtml(html: string): string {
    const text = html.replace(/<[^>]+>/g, "");
    const words = text.split(" ");
    if (words.length > 30) {
        return `${words.slice(0, 30).join(" ")}...`;
    }
    return text;
}


export function maxText(text: string, length: number) {
    if (text.length <= length) return text;
    return text.substring(0, length) + "..."
}