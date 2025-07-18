import path from "path";
import fs from "fs"
import { fileURLToPath } from "url";

import type { StudioInfo } from '../models/studio-info'
import type { StudioHit } from '../models/studio-hit'

type DataType = 'hits' | 'studios'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getData = async (dataType: DataType): Promise<StudioHit[] | StudioInfo[]> => {
  const pathData = path.join(__dirname, `./${dataType === 'hits' ? "studio_hits.json" : "studio_info.json"}`)
  
  const language = 'utf-8'

  const rawData = fs.readFileSync(pathData, language)

  return JSON.parse(rawData)
}