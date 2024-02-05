export default function splitStringByLineEnd(str: string) {
  return str.split(/\n/).map((str) => str.trim());
}
