from pathlib import Path

from PIL import Image

SRC = Path(
    r"C:\Users\t430\.cursor\projects\c-Users-t430-Glotelco-Globatel-Website\assets"
    r"\c__Users_t430_AppData_Roaming_Cursor_User_workspaceStorage_54a58e234d01789858e3d112a7dd8e7a_images_image-b9b22f75-4147-4645-a64b-486950b80e53.png"
)
ROOT = Path(r"C:\Users\t430\Glotelco-US-Website")
PUBLIC = ROOT / "public"
APP = ROOT / "src" / "app"
SCALE = 4


def remove_white(im: Image.Image, threshold: int = 240) -> Image.Image:
    im = im.convert("RGBA")
    px = im.load()
    w, h = im.size
    for y in range(h):
        for x in range(w):
            r, g, b, _ = px[x, y]
            if min(r, g, b) >= threshold:
                px[x, y] = (r, g, b, 0)
    # feather anti-aliased pixels that sit next to removed background
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            m = min(r, g, b)
            if a == 0 or m < 200:
                continue
            if any(
                0 <= x + dx < w and 0 <= y + dy < h and px[x + dx, y + dy][3] == 0
                for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1))
            ):
                px[x, y] = (r, g, b, int(255 * (threshold - m) / (threshold - 200)))
    return im


src = Image.open(SRC).convert("RGB")
src = src.resize((src.width * SCALE, src.height * SCALE), Image.LANCZOS)
clean = remove_white(src)

w, h = clean.size
px = clean.load()
rows = [any(px[x, y][3] > 0 for x in range(w)) for y in range(h)]
bands, start = [], None
for y, filled in enumerate(rows):
    if filled and start is None:
        start = y
    elif not filled and start is not None:
        bands.append((start, y))
        start = None
if start is not None:
    bands.append((start, h))
globe_band = max(bands[:-1], key=lambda b: b[1] - b[0])
text_band = bands[-1]

globe = clean.crop((0, globe_band[0], w, globe_band[1]))
globe = globe.crop(globe.getbbox())
text = clean.crop((0, text_band[0], w, text_band[1]))
text = text.crop(text.getbbox())

lock_h = globe.height
text_h = int(lock_h * 0.5)
text_w = int(text.width * text_h / text.height)
text_r = text.resize((text_w, text_h), Image.LANCZOS)
gap = int(lock_h * 0.16)
lockup = Image.new("RGBA", (globe.width + gap + text_w, lock_h), (0, 0, 0, 0))
lockup.paste(globe, (0, 0), globe)
lockup.paste(text_r, (globe.width + gap, (lock_h - text_h) // 2 + int(lock_h * 0.03)), text_r)
lockup = lockup.resize((lockup.width // 2, lockup.height // 2), Image.LANCZOS)
lockup.save(PUBLIC / "logo.png", optimize=True)

side = max(globe.size)
icon = Image.new("RGBA", (side, side), (0, 0, 0, 0))
icon.paste(globe, ((side - globe.width) // 2, (side - globe.height) // 2), globe)
icon.resize((256, 256), Image.LANCZOS).save(APP / "icon.png", optimize=True)

preview = Image.new("RGBA", lockup.size, (244, 247, 248, 255))
preview.alpha_composite(lockup)
preview.convert("RGB").save(ROOT / "scripts" / "preview-logo.png")
print("logo", lockup.size, "icon 256")
