export type BannerData = {
  message: string;
  state: 'success' | 'error';
};

export default function Banner({
  banner: { message, state },
}: {
  banner: BannerData;
}) {
  const isSuccess = state === 'success';
  const icon = isSuccess ? '✅' : '❌';
  return (
    <p
      className={`p-2 my-3 text-sm rounded-sm font-bold ${
        isSuccess ? 'bg-teal-200' : 'bg-red-200'
      }`}
    >{`${icon} ${message}`}</p>
  );
}
