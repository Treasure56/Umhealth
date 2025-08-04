/* eslint-disable @next/next/no-img-element */
"use client";

import {
  ChangeEvent,
  ComponentProps,
  HTMLAttributes,
  memo,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import clsx from "clsx";
import { ANY } from "@/type";

export type AppInputProps = {
  icon?: React.ReactNode;
  placeholder: string;
  value?: string;
  name: string;
  type?: string;
  textarea?: boolean;
  readonly?: boolean;
  hidden?: boolean;
  ps?: string;
  title?: string;
  rows?: number;
  error?: string[];
  onChange?: (value: string) => void;
  onErrorChange?: (hasError: boolean) => void;
  inputProps?: HTMLAttributes<HTMLInputElement> & ComponentProps<"input">;
};

export default memo(function AppInput({
  icon,
  placeholder,
  value,
  name,
  type = "text",
  onChange,
  textarea = false,
  ps,
  title,
  readonly,
  hidden,
  rows,
  error: fieldError,
  inputProps = {},
}: AppInputProps) {
  const isFile = type === "file";
  const isControlled = false // value !== undefined;

  const [internalValue, setInternalValue] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | undefined>();
  const [eyeOpen, setEyeOpen] = useState(false);

  const inputId = useMemo(() => `${title ?? name}-input`, [title, name]);

  // Sync external value to internal state if controlled
  useEffect(() => {
    if (!isFile && !isControlled) {
      setInternalValue(value ?? "");
    }
  }, [value, isFile, isControlled]);

  // Memory cleanup for image preview
  useEffect(() => {
    let url: string | null = null;
    if (selectedFile) {
      url = URL.createObjectURL(selectedFile);
    }
    return () => {
      if (url) URL.revokeObjectURL(url);
    };
  }, [selectedFile]);

  const handleTextChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      inputProps.onChange?.(e as ChangeEvent<HTMLInputElement>);
      const newVal = e.target.value;
      if (!isControlled) setInternalValue(newVal);
      onChange?.(newVal);
    },
    [inputProps, onChange, isControlled]
  );

  const handleFileChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      inputProps.onChange?.(e);
      const file = e.target.files?.[0];
      setSelectedFile(file);
    },
    [inputProps]
  );

  const hasFieldError = fieldError?.[0] ?? null;

  const renderPreview = selectedFile && selectedFile.type.startsWith("image/");

  return (
    <div className={clsx({ hidden })}>
      {title && (
        <label htmlFor={inputId} className="inline-block pb-1 text-black-300 text-label">
          {title}
        </label>
      )}
      <div className="relative flex gap-1 items-start">
        {renderPreview && (
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Preview"
            className="rounded h-10 object-cover w-10 flex-shrink-0"
          />
        )}
        <div className="relative AppInput z-[1] w-full">
          {icon && (
            <span
              className={clsx(
                "absolute inline-block left-3 opacity-60",
                textarea ? "top-4" : "top-1/2 -translate-y-1/2"
              )}
            >
              {icon}
            </span>
          )}

          {type === "password" && (
            <button
              type="button"
              onClick={() => setEyeOpen(!eyeOpen)}
              className={clsx(
                "absolute inline-block right-3",
                textarea ? "top-4" : "top-1/2 -translate-y-1/2"
              )}
            >
              {eyeOpen ? <FaRegEye /> : <FaRegEyeSlash />}
            </button>
          )}

          {textarea ? (
            <textarea
              {...inputProps as ANY}
              id={inputId}
              name={name}
              readOnly={readonly}
              placeholder={placeholder}
              rows={rows ?? 4}
              value={isControlled ? value : internalValue}
              onChange={handleTextChange}
              className={clsx(
                "app-input",
                { "ps-3": !icon, "ps-9": icon },
                { "!bg-red-100": hasFieldError }
              )}
            />
          ) : (
            <input
              {...inputProps}
              id={inputId}
              name={name}
              type={type === "password" && eyeOpen ? "text" : type}
              placeholder={placeholder}
              readOnly={readonly}
              accept={inputProps.accept ?? ".mp3,.wav,.opus,.m4a,.aac,.ogg,audio/*"}
              multiple={inputProps.multiple ?? false}
              value={isFile ? undefined : isControlled ? value : internalValue}
              onChange={isFile ? handleFileChange : handleTextChange}
              className={clsx(
                "app-input",
                ps ? ps : icon ? "ps-9" : "ps-4",
                type === "password" && "pe-4",
                !type.startsWith("password") && "pe-9",
                inputProps.className,
                { "!bg-red-100": hasFieldError }
              )}
            />
          )}
        </div>
      </div>
      {hasFieldError && <p className="text-red-900 text-xs">{hasFieldError}</p>}
    </div>
  );
});

// /* eslint-disable @next/next/no-img-element */
// /* eslint-disable jsx-a11y/alt-text */
// "use client";

// import {
//   ChangeEvent,
//   ComponentProps,
//   HTMLAttributes,
//   memo,
//   useEffect,
//   useState,
// } from "react";
// import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

// export type AppInputProps = {
//   icon?: React.ReactNode;
//   placeholder: string;
//   value?: string;
//   name: string;
//   type?: string;
//   textarea?: boolean;
//   readonly?: boolean;
//   hidden?: boolean;
//   ps?: string;
//   title?: string;
//   rows?: number;
//   error?: string[];
//   onChange?: (value: string) => void;
//   onErrorChange?: (hasError: boolean) => void;
//   inputProps?: HTMLAttributes<HTMLInputElement> & ComponentProps<"input">;
// };

// export default memo(function AppInput({
//   icon,
//   placeholder,
//   value,
//   name,
//   type = "text",
//   onChange,
//   textarea = false,
//   // onErrorChange,
//   ps,
//   title,
//   readonly,
//   hidden,
//   rows,
//   error: fieldError,
//   inputProps,
// }: AppInputProps) {
//   const isFile = type === "file";
//   // const [_type, setType] = useState(type);
//   const [eyeOpen, setEyeOpen] = useState(false);
//   const [val, setVal] = useState(value);
//   const [error] = useState<string | null>(null);
//   const hasFieldError = fieldError && fieldError.length > 0 && fieldError[0];
//   const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);
//   // const hasUpdated = useRef(false);

//   useEffect(() => {
//     if (!isFile) setVal(value);
//   }, [value, isFile]);

//   function handleTextChange(
//     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) {
//     inputProps?.onChange?.(e as ChangeEvent<HTMLInputElement>);
//     setVal(e.target.value);
//     if (onChange) onChange(e.target.value);
//   }

//   const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
//     inputProps?.onChange?.(event);
//     setSelectedFile(event.target.files?.[0]);
//   };

//   return (
//     <div className={hidden ? "hidden" : ""}>
//       {title && (
//         <label
//           htmlFor={`${title}-input`}
//           className="inline-block pb-1 text-black-300 text-label"
//         >
//           {title}
//         </label>
//       )}
//       <div className="relative flex gap-1 ">
//         {selectedFile &&
//           ["png", "jpg", "jpeg", "gif"].includes(
//             selectedFile.type.split("/")[1]
//           ) && (
//             <img
//               className="rounded h-10 object-cover w-10 flex-shrink-0"
//               src={URL.createObjectURL(selectedFile)}
//             />
//           )}
//         <div className="relative AppInput z-[1] w-full">
//           <span
//             className={`absolute inline-block left-3 opacity-60 ${
//               textarea ? "top-4" : "top-1/2 -translate-y-1/2"
//             }`}
//           >
//             {icon}
//           </span>
//           {type === "password" && (
//             <button
//               type="button"
//               role="button"
//               onClick={() => setEyeOpen(!eyeOpen)}
//               className={`absolute inline-block right-3 ${
//                 textarea ? "top-4" : "top-1/2 -translate-y-1/2"
//               }`}
//             >
//               {eyeOpen ? <FaRegEye /> : <FaRegEyeSlash />}
//             </button>
//           )}
//           {textarea ? (
//             <textarea
//               readOnly={readonly}
//               hidden={hidden}
//               id={`${title}-input`}
//               name={name}
//               placeholder={placeholder}
//               rows={rows ?? 4}
//               value={isFile ? undefined : val}
//               onChange={handleTextChange}
//               className={`app-input ${!icon ? "ps-3" : "ps-9"} ${
//                 error || fieldError ? "!bg-red-100" : ""
//               }`}
//             />
//           ) : (
//             <input
//               {...inputProps}
//               readOnly={readonly}
//               hidden={hidden}
//               id={`${title}-input`}
//               name={name}
//               placeholder={placeholder}
//               type={!eyeOpen ? type : "text"}
//               defaultValue={isFile ? undefined : val}
//               onChange={isFile ? handleFileChange : handleTextChange}
//               className={`app-input ${ps ? ps : !icon ? "ps-4" : "ps-9"} ${
//                 type === "password" ? "pe-4" : "pe-9"
//               }  ${error || hasFieldError ? "!bg-red-100" : ""}`}
//             />
//           )}
//         </div>
//       </div>
//       {error && <p className="text-red-900 text-xs">{error}</p>}
//       {hasFieldError && <p className="text-red-900 text-xs">{fieldError[0]}</p>}
//     </div>
//   );
// });
