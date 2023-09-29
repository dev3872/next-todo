"use client";

export default function DaySelect({
  month,
  year,
}: {
  month: string;
  year: string;
}) {
  return (
    <div className="">
      <div className="h-[80px] w-max bottom-1">
        <span>1</span>
      </div>
      <div className="h-80 w-max border-1">2</div>
      <div className="h-80 w-max">3</div>
    </div>
  );
}
