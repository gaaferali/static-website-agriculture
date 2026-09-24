from pathlib import Path
from urllib.request import urlopen, Request
from PIL import Image, ImageOps
from io import BytesIO

OUT = Path('/home/ubuntu/agriculture-hero-images')
ORIG = OUT / 'originals'
READY = OUT / 'hero-ready'

assets = [
    ('01-soil-analysis-and-treatment', 'https://files.manuscdn.com/search-media/310519663979317025/thOYHLs91JRIoSywRg9YWo/TwVPBezMfTeFuqifSEHPED.webp'),
    ('02-connected-farm-tools-and-reporting', 'https://files.manuscdn.com/search-media/310519663979317025/thOYHLs91JRIoSywRg9YWo/4XxA6FZey4A6ABsJA6pmT7.jpg'),
    ('03-agricultural-advisory', 'https://files.manuscdn.com/search-media/310519663979317025/thOYHLs91JRIoSywRg9YWo/om7kcpoNnH68gLucxtBiKg.jpg'),
    ('04-efficient-irrigation', 'https://files.manuscdn.com/search-media/310519663979317025/thOYHLs91JRIoSywRg9YWo/5ar57daVwETCbojnew9hf3.jpg'),
    ('05-predictive-farm-models', 'https://files.manuscdn.com/search-media/310519663979317025/thOYHLs91JRIoSywRg9YWo/G67Jk49tBmF675S2Vd6CK7.jpg'),
    ('06-crop-risk-analytics', 'https://files.manuscdn.com/search-media/310519663979317025/thOYHLs91JRIoSywRg9YWo/ChUGNSf5P6irfTzMQ8ykcQ.jpg'),
    ('07-ai-irrigation-command', 'https://files.manuscdn.com/search-media/310519663979317025/thOYHLs91JRIoSywRg9YWo/Sr6issECgvtn5YSqPPAH8Q.jpg'),
    ('08-home-agriculture-agency', 'https://files.manuscdn.com/search-media/310519663979317025/thOYHLs91JRIoSywRg9YWo/JMUxTnwxmWtkHPJFumShi7.jpg'),
]

for stem, url in assets:
    req = Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    data = urlopen(req, timeout=30).read()
    img = Image.open(BytesIO(data)).convert('RGB')
    original_path = ORIG / f'{stem}.jpg'
    img.save(original_path, quality=95, optimize=True)
    # Export a wide 16:9 hero crop at 1600x900. Center crop preserves the main field/farm subject.
    hero = ImageOps.fit(img, (1600, 900), method=Image.Resampling.LANCZOS, centering=(0.5, 0.5))
    hero.save(READY / f'{stem}.jpg', quality=92, optimize=True, progressive=True)
    print(f'{stem}: {img.size} -> {hero.size}')

print('Done')
