import { z } from 'zod';

export const TeacherSchema = z.object({
  rid: z.number(),
  tid: z.number(),
  avator: z.string().nullable(),
  fullname: z.string(),
  intro: z.string().nullable(),
  tags: z.array(z.string()).nullable(),
  views: z.number(),
  updated_at: z.number(),
  region: z.string().nullable(),
  url_path: z.string(),
  followed: z.boolean(),
  contacted: z.boolean(),
});

export const TeachersResponseSchema = z.object({
  code: z.string(),
  msg: z.string(),
  data: z.object({
    items: z.array(TeacherSchema),
    next: z.string().nullable(),
  }),
});

export const Teacher = TeacherSchema.transform((item) => ({
  id: item.rid,
  tid: item.tid,
  avatar: item.avator,
  name: item.fullname || 'Unknown',
  introduction: item.intro || 'No introduction available',
  tags: item.tags || [],
  views: item.views || 0,
  updatedAt: item.updated_at || Date.now(),
  region: item.region || 'Unknown',
  urlPath: item.url_path,
  followed: item.followed || false,
  contacted: item.contacted || false,
}));
