import { Box } from '../../atoms/box';

export function Title({ children }: any) {
  return (
    <div className='flex items-center gap-1'>
      <Box />
      <h2 className={`font-bold text-3xl leading-relaxed `}>{children}</h2>
    </div>
  );
}
