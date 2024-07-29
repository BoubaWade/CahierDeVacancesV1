type ImageProps = {
  src: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLImageElement>;
};

export default function Image({ src, className, onClick }: ImageProps) {
  return <img src={src} className={className} onClick={onClick} />;
}
