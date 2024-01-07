interface compProps {
  children: string;
  size: string;
}

export default function TitleTxt({ children, size }: compProps) {
  return (
    <h1
      className="w-fit relative font-semibold after:absolute after:w-[100px] after:h-[3px] dark:after:bg-orange-400 after:bg-black after:bottom-0 after:right-[-10%]"
      style={{ fontSize: size }}
    >
      {children}
    </h1>
  );
}
