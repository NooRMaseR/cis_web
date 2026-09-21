FROM python:3.14.7-slim

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

COPY --from=ghcr.io/astral-sh/uv:latest /uv /uvx /bin/

WORKDIR /app

RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    libpq-dev \
    libffi-dev \
    libjpeg-dev \
    zlib1g-dev \
    libwebp-dev \
    && rm -rf /var/lib/apt/lists/*

COPY pyproject.toml uv.lock /app/

RUN uv sync --locked

COPY . .

RUN uv run manage.py collectstatic --no-input

CMD [ "uv", "run", "manage.py", "runbolt" ]
